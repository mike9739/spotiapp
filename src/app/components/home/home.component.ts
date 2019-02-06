import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

 newSongs:any[]=[]
 loading:boolean;
 error:boolean = false;
 mensajError:string;
  constructor(private _spotify:SpotifyService) {
    console.log("spotify service its ready to use!")
    this.loading = true;
    this._spotify.getNewRelase().
      subscribe((res:any) =>{
        console.log(res)
        this.newSongs=res;
        this.loading = false;
      },
      (errorService)=>{
        console.log(errorService)
        this.error=true;
        this.loading=false;
        this.mensajError= errorService.error.error.message;
      });
    
   }

  ngOnInit() {
  }

}
