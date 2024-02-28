import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development'
import { tracksDTO } from '../models/tracksDTO.model';


@Injectable({
  providedIn: 'root'
})
export class SearchPlaylistService {

  constructor(private http : HttpClient) { }

  GetAllSpTracks(){
    return this.http.get<tracksDTO[]>(`${environment.apiUrl}/tracks/sp`)
  }

  GetAllYtTracks(){
    return this.http.get<tracksDTO[]>(`${environment.apiUrl}/tracks/yt`)
  }
  
}
