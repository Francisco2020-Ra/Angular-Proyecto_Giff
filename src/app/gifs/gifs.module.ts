import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifBusquedaComponent } from './gif-busqueda/gif-busqueda.component';
import { GifResultadoComponent } from './gif-resultado/gif-resultado.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifBusquedaComponent,
    GifResultadoComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
