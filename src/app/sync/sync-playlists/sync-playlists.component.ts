import { Component } from '@angular/core';
import { PlaylistService } from '../../shared/playlist.service';

@Component({
  selector: 'ms-sync-playlists',
  templateUrl: './sync-playlists.component.html' ,
  styleUrl: './sync-playlists.component.scss'
})
export class SyncPlaylistsComponent {
  isSyncing = false;
  hasSynced = false;
  syncFailed = false;

  constructor(private plyalistSvc : PlaylistService) {
  }

  sync(){
    this.isSyncing = true;
    this.plyalistSvc.syncPlaylists().subscribe({
      next : _ => {this.isSyncing = false;this.hasSynced=true},
      error: _ => {this.isSyncing = false;this.syncFailed = true}
   })
  }
}
