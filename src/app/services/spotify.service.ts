import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient:HttpClient) { }

  getQuery(query:string){
    const url:string=`https://api.spotify.com/v1/${query}`
    const Headers = new HttpHeaders({
      'Authorization':'Bearer BQC7hY30g3Kp_TyU-DM2ECkkiLZOwVq6oCUNv7MG0CLvSUHujAyz22BhRaoIwLniYoIP_V8EP6H6Deu_OBY'
    })
    return this._httpClient.get(url,{headers: Headers})

  }

  getNewRelase(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map(res=>res['albums'].items))
    // this._httpClient.get('https://api.spotify.com/v1/,{headers:Headers})
  }

  getArtists(name:string)
  {
   return this.getQuery(`search?q=${name}&type=artist&limit=15`).
    pipe(map(res=>res['artists'].items))
  }
  getArtist(name:string)
  {
    return this.getQuery(`artists/${name}`)
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=mx`).
    pipe(map(res=>res['tracks']))
  }
}
