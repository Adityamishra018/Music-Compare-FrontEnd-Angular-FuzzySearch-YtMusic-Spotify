import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparePlaylistComponent } from './compare-playlist/compare-playlist.component';

const routes: Routes = [
  {path : 'compare' , component : ComparePlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
