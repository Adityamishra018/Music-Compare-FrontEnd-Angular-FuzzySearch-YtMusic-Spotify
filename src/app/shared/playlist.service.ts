import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development'
import { playlistDTO } from '../models/playlistDTO.model';
import { ComparisionResultDTO } from '../models/comparisionResultDTO';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  url : string
  selectedYtPlaylist : string;
  selectedSpPlaylist : string;
  comparisionResult : ComparisionResultDTO | undefined  = undefined;
  isLoading = false

  constructor(public http : HttpClient) { 
    this.url = environment.apiUrl 
  }

  canCompare(){
    if (this.selectedSpPlaylist && this.selectedYtPlaylist)
      return true
    return false
  }

  syncPlaylists(){
    return this.http.post<unknown>(`${this.url}/sync`,undefined)
  }

  GetYoutubePlaylists(){
    return this.http.get<playlistDTO[]>(`${this.url}/playlists/yt`)
  }

  GetSpotifyPlaylists(){
    return this.http.get<playlistDTO[]>(`${this.url}/playlists/sp`)
  }

  ComparePlaylist(){
    return this.http.get<ComparisionResultDTO>(`${this.url}/compare`,{
      params : {
        "ytId" : this.selectedYtPlaylist,
        "spId" : this.selectedSpPlaylist
      }
    })
  } 

}
