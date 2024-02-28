import { Component, Input } from '@angular/core';
import { playlistDTO } from '../../models/playlistDTO.model';
import { PlaylistService } from '../../shared/playlist.service';

@Component({
  selector: 'ms-playlist',
  templateUrl: './playlist.component.html' ,
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  @Input({required : true}) playlist : playlistDTO;
  @Input({required : true}) provider = ''

  constructor(public playlistService : PlaylistService){}

  selected(){
    if (this.provider === 'yt')
      this.playlistService.selectedYtPlaylist = this.playlist.playlist_id
    if (this.provider === 'sp')
      this.playlistService.selectedSpPlaylist = this.playlist.playlist_id
  }


}
