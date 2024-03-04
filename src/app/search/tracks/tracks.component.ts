import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { tracksDTO } from '../../models/tracksDTO.model';

@Component({
  selector: 'ms-tracks',
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent implements OnInit{
  @Input({required : true}) track : tracksDTO

  @ViewChild('trackDetails',{static : true}) trackDetail : ElementRef<HTMLElement>

  ngOnInit(): void {
    if (this.track.provider && this.track.provider === "youtube")
      this.trackDetail.nativeElement.style.backgroundImage = `url('../../../assets/YT_Music.svg.png')`
    else if (this.track.provider && this.track.provider === "spotify")
      this.trackDetail.nativeElement.style.backgroundImage = `url('../../../assets/Spotify_Logo_RGB_Green.png')`
  }


}
