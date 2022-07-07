import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {

  artistas:any[]=[];
  loading:boolean=false;

  constructor(private spotify:SpotifyService) {}
  
  
  buscar(termino:any){
    this.loading=true;
    this.spotify.getArtistas((termino))
    .subscribe((respuesta:any)=>{
      console.log(respuesta);
      
      this.artistas = respuesta;
      this.loading = false;
      
      console.log(this.artistas)
    })
  };


 

  ngOnInit(): void {
  }

}
