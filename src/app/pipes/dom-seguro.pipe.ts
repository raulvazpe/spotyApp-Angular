import { Pipe, PipeTransform } from '@angular/core';
import{SafeResourceUrl,DomSanitizer}from '@angular/platform-browser'

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
  constructor(private domSanitazer:DomSanitizer){};

  transform(value: string, enlace: string) {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(enlace+value);
   
  }

}
