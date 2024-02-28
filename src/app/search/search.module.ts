import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TracksComponent } from './tracks/tracks.component';


@NgModule({
  declarations: [
    SearchComponent,
    TracksComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule
  ]
})
export class SearchModule { }
