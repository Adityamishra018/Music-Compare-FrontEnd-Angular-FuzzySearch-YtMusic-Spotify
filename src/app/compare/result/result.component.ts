import { Component, ViewEncapsulation } from '@angular/core';
import { PlaylistService } from '../../shared/playlist.service';

@Component({
  selector: 'ms-result',
  templateUrl: './result.component.html', 
  styleUrl : './result.component.scss',
  encapsulation : ViewEncapsulation.None
})
export class ResultComponent{
  
  constructor(public playlistService : PlaylistService) {}

}
