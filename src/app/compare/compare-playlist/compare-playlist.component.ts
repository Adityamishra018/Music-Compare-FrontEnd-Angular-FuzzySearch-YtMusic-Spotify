import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PlaylistService } from '../../shared/playlist.service';
import { playlistDTO } from '../../models/playlistDTO.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ms-compare-playlist',
  templateUrl: './compare-playlist.component.html',
  styleUrl: './compare-playlist.component.scss'
})
export class ComparePlaylistComponent implements OnInit, OnDestroy{
  ytPlaylists : playlistDTO[] = []
  spPlaylists : playlistDTO[] = []

  @ViewChild("resultDiv",{static : true}) 
  public resultEle : ElementRef;

  yt$ : Subscription;
  sp$ : Subscription;

  constructor(public playlistService : PlaylistService) {}

  ngOnInit(): void {
    this.yt$ = this.playlistService.GetYoutubePlaylists().subscribe(pls => {
      this.ytPlaylists = pls
    })

    this.sp$ = this.playlistService.GetSpotifyPlaylists().subscribe(pls => {
      this.spPlaylists = pls
    })
  }

  Compare(){
    this.resultEle.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' })
    this.playlistService.isLoading = true
    this.playlistService.ComparePlaylist().subscribe(res =>{
      this.playlistService.isLoading = false
      this.playlistService.comparisionResult = res
    })
  }

  ngOnDestroy(): void {
    this.yt$.unsubscribe()
    this.sp$.unsubscribe()
  }


}


