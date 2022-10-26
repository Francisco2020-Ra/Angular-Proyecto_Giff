import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-busqueda',
  templateUrl: './gif-busqueda.component.html',
  styles: [
  ]
})
export class GifBusquedaComponent {

  constructor(private gifsService:GifsService){}

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;
    
    //Valida que el campo no esta en vacio
    if( valor.trim().length == 0){
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';

  }
}
