import { Component, Input } from '@angular/core';
import { playlistDTO } from '../../models/playlistDTO.model';

@Component({
  selector: 'ms-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls : ['./playlist-list.component.scss']
})
export class PlaylistListComponent {
  @Input({required : true}) provider : string = ''
  @Input({required : true}) playlists : playlistDTO[] = []
}
