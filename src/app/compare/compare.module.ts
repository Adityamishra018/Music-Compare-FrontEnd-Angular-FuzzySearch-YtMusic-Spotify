import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { ComparePlaylistComponent } from './compare-playlist/compare-playlist.component';
import { SharedModule } from '../shared/shared.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { ResultComponent } from './result/result.component';
import { ComparisionResultDirective } from './comparision-result.directive';


@NgModule({
  declarations: [
    ComparePlaylistComponent,
    PlaylistComponent,
    PlaylistListComponent,
    ResultComponent,
    ComparisionResultDirective
  ],
  imports: [
    CommonModule,
    CompareRoutingModule,
    SharedModule
  ],
  exports : [
    PlaylistComponent,
    PlaylistListComponent
  ]
})
export class CompareModule { }
