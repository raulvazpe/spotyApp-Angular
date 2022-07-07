import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images:any[] ):any {

    // valdiamos si encuentra el array imagen, si no le pondra la predeterminada que le indicamos
    if(!images){
      return 'assets/img/noimage.png';
    }


    //Si el array de la imagen es mayor a 0 significara que hay imagenes,le diremos que devuelva la primera del array,
    //Si es menor a 0 significara que no hay imagenes y mostrara la que le indiquemos
    if(images.length>0){
      return images[0].url;
    }else{
      return 'assets/img/noimage.png';
    }

  }

}
