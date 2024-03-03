import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncPlaylistsComponent } from './sync-playlists/sync-playlists.component';

const routes: Routes = [
  {path : '', component: SyncPlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncRoutingModule { }
