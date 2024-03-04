import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import FuzzySet from 'fuzzyset.js';
import { SearchPlaylistService } from '../search-playlist.service';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { tracksDTO } from '../../models/tracksDTO.model';

@Component({
  selector: 'ms-search',
  templateUrl: './search.component.html' ,
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  counter  = 0;
  ytTracks : tracksDTO[] = [];
  spTracks : tracksDTO[] = [];
  ytSearchTracks : string[] = [];
  spSearchTracks : string[] = [];
  searchResults : tracksDTO[] = [];
  
  @ViewChild('textInput',{static : true}) inputRef : ElementRef
  @ViewChild('ytCheck',{static : false}) ytCheckRef : ElementRef
  @ViewChild('spCheck',{static : false}) spCheckRef : ElementRef

  private sp$ : Subscription;
  private yt$ : Subscription;
  private input$ : Subscription;

  constructor(private searchSvc : SearchPlaylistService) {}

  update(){
    this.searchResults = []
    let fuzzysearch = FuzzySet([(this.inputRef.nativeElement as HTMLInputElement).value],false)

    if ((this.ytCheckRef.nativeElement as HTMLInputElement).checked)
      this.ytSearchTracks.forEach(t =>{
        let res = fuzzysearch.get(t)
        if(res && res !== null){
          this.searchResults.push({...this.ytTracks[parseInt(this.getTrackIndex(t))], provider : "youtube"})
        }
      })

    if ((this.spCheckRef.nativeElement as HTMLInputElement).checked)
      this.spSearchTracks.forEach(t =>{
        let res = fuzzysearch.get(t)
        if(res && res !== null){
          this.searchResults.push({...this.spTracks[parseInt(this.getTrackIndex(t))], provider : "spotify"})
        }
      })
  }

  getTrackIndex(str : string){
    let lastIndex = str.length - 1;
    while (lastIndex >= 0 && !isNaN(parseInt(str.at(lastIndex) || 'a'))) {
       lastIndex--;
    }
    return str.substring(lastIndex + 1);
  }

  ngOnInit(): void {
    this.input$ = fromEvent(this.inputRef.nativeElement,'input').pipe(
      debounceTime(500)
    ).subscribe(_ => {
      this.update()
    })

    this.sp$ = this.searchSvc.GetAllSpTracks().subscribe({
      next :  tracks =>{
                tracks.forEach((t,i) =>{
                  this.spSearchTracks.push(`${t.title} ${t.artists} ${t.album} ${i}`)
                })
                this.counter += 1
                this.spTracks = tracks
              },
      error : _ =>{this.counter = 3}
    })

    this.yt$ = this.searchSvc.GetAllYtTracks().subscribe({
      next :  tracks =>{
                tracks.forEach((t,i) =>{
                  this.ytSearchTracks.push(`${t.title} ${t.artists} ${t.album} ${i}`)
                })
                this.counter += 1
                this.ytTracks = tracks
              },
      error : _ => {this.counter = 3}
      })
  }

  ngOnDestroy(): void {
      this.sp$.unsubscribe()
      this.yt$.unsubscribe()
      this.input$.unsubscribe()
  }

}
