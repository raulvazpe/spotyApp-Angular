import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {

  artista:any={};
  loading:boolean=true;
  topTracks:any[]=[]
  

  constructor(private activatedRoute:ActivatedRoute,
              private spotify:SpotifyService) {

this.activatedRoute.params.subscribe(params=>{
  this.getArtista(params['id']);
  this.getTopTrucks(params['id']);
})

   }

getArtista(id:string){

  this.loading=true;
  this.spotify.getArtista(id).subscribe((respuesta:any)=>{
    console.log(respuesta);
    this.artista=respuesta;
    this.loading=false;
  })
}

getTopTrucks(id:string){
this.spotify.getTopTracks(id).subscribe((respuesta:any)=>{
 // console.log(respuesta);
  this.topTracks=respuesta.tracks;
  console.log(this.topTracks)
    
})
}

}
