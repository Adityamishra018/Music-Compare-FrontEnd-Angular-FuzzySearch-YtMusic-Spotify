import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyncRoutingModule } from './sync-routing.module';
import { SyncPlaylistsComponent } from './sync-playlists/sync-playlists.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SyncPlaylistsComponent
  ],
  imports: [
    CommonModule,
    SyncRoutingModule,
    SharedModule
  ]
})
export class SyncModule { }
