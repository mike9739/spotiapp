import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
artists:any[]=[];
loading:boolean;
  constructor(private _spotify:SpotifyService) { }
  buscar(termino:string){
    this.loading=true
    if(!termino)
    {
      this.loading=false;
      return
    }
    this._spotify.getArtists(termino).subscribe((res:any)=>{
      console.log(res)
      this.artists = res
      this.loading=false
    })
  }

}
