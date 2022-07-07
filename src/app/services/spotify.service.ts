import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoadingComponent } from '../components/shared/loading/loading.component';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   

  constructor(private http:HttpClient) { 
    console.log('listo para usar');
  }
  

  getQuery(query:string){
    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQALvZb5gnHYuWS1haXxANsZWW1nLYXsWR3PoHZcLGNaLBZk3tgRyrGb-IsEfUEKzDQvHFDQvJxM40bYg2U'
    });    

    const url =`https://api.spotify.com${query}`;
    return this.http.get(url,{headers})   //recoge los datos mandados por url
    
    
  }

  getNewReleases(){
    
    return this.getQuery('/v1/browse/new-releases')
    .pipe(map((respuesta:any)=>{ //añadiendo esta parte crearemos un filtro para que nos devuelva solo los datos deseados
      return respuesta.albums.items
    }));   
  }

  getArtistas(termino:string){
    
   return this.getQuery(`/v1/search?q=${ termino }&type=artist&limit=20`)
    .pipe(map((respuesta:any)=>{ //añadimos el pipe y el map para mandarle el nuevo valor
      return respuesta.artists.items
    }));
   }

  getArtista(id:string){
    
    return this.getQuery(`/v1/artists/${id}`);
    //.pipe(map((respuesta:any)=>{
     // return respuesta;
    //}))
  }
  

  getTopTracks(id:string){
    
    return this.getQuery(`/v1/artists/${id}/top-tracks?market=us`)
    //.pipe(map((respuesta:any)=>{
    //  return respuesta;
    
  }
}


