import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any={}
  tracks:any[]=[]
  load:boolean;
  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService:SpotifyService) { 
    
    this._activatedRoute.params.subscribe(params=>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      
    })
  }

  ngOnInit() {
  }
  getArtist(id:string){ 
    this.load=true;
    this._spotifyService.getArtist(id).subscribe((artist:any)=>{
      console.log(artist)
      this.artist = artist
      this.load=false;
    })

  }
  getTopTracks(id:string)
  {
    this._spotifyService.getTopTracks(id).subscribe((tracks:any)=>{
      console.log(tracks)
      this.tracks=tracks
    })
  }
}
