import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[]=[];
  loading:boolean=true;
  divError:boolean=false;
  mensajeError:string='';

  constructor(private spotify:SpotifyService) {


    this.spotify.getNewReleases()
    .subscribe((respuesta:any) =>{
        console.log(respuesta);
        this.loading=false;
        this.nuevasCanciones = respuesta; // si no tenemos el filtro hecho con map, seria:
        //respuesta.almums.items para que podamos ver en este caso lo del filtro.
      },(descripcionError:any)=>{
        this.divError=true;
        this.loading=false;
        //console.log(descripcionError.error.error.message)
        this.mensajeError=descripcionError.error.error.message
        console.log(this.mensajeError)
      });
 
    };
   

  ngOnInit(): void {
  }

}
