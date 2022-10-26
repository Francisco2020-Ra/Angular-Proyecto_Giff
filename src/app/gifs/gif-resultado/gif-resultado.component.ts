import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gifs } from '../interface/gifs.interface';

@Component({
  selector: 'app-gif-resultado',
  templateUrl: './gif-resultado.component.html',
  styles: [
  ]
})
export class GifResultadoComponent {

  get resultados(){
    return this.gifsServices.resultados;
  }
  constructor(private gifsServices: GifsService) { }


}
