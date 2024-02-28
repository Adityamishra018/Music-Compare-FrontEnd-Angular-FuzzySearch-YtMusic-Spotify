import { Directive, ElementRef, OnInit} from '@angular/core';
import { PlaylistService } from '../shared/playlist.service';

@Directive({
  selector: '[msComparisionResult]'
})
export class ComparisionResultDirective implements OnInit {

  constructor(private playlistService : PlaylistService,private ele : ElementRef<HTMLElement>) {
  }

  private newElement(name : string, className : string, textContent : string){
    let a = document.createElement(name)
    a.classList.add(className)
    a.textContent = textContent
    return a
  }

  ngOnInit(): void {

    if (!this.playlistService.comparisionResult)
      return
    
    this.ele.nativeElement.appendChild(this.newElement('div','sp-count',`Spotify track count: ${this.playlistService.comparisionResult['spotify track count'].toString()}`))

    this.ele.nativeElement.appendChild(this.newElement('div','yt-count',`Youtube music track count: ${this.playlistService.comparisionResult['ytMusic track count'].toString()}`))

    if (this.playlistService.comparisionResult['missing in Spotify']){
      this.ele.nativeElement.appendChild(this.newElement('div','sp-missing','Tracks missing in Spotify'))
      let ul = document.createElement('ul')
      for(let t of this.playlistService.comparisionResult['missing in Spotify']){
        ul.appendChild(this.newElement('li','sp-track',t))
      }
      this.ele.nativeElement.appendChild(ul)
    }

    if (this.playlistService.comparisionResult['missing in youtube']){
      this.ele.nativeElement.appendChild(this.newElement('div','yt-missing','Tracks missing in Youtube music'))
      let ul = document.createElement('ul')
      for(let t of this.playlistService.comparisionResult['missing in youtube']){
        ul.appendChild(this.newElement('li','yt-track',t))
      }
      this.ele.nativeElement.appendChild(ul)
    }

    if (this.playlistService.comparisionResult['out of order']){
      this.ele.nativeElement.appendChild(this.newElement('div','out-of-order','Tracks out of order'))
      let d = document.createElement('ul')
      for(let t of this.playlistService.comparisionResult['out of order']){
        d.appendChild(this.newElement('li','ooo-track',t))
      }
      this.ele.nativeElement.appendChild(d)
    }
   }
}
