import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFSearch, Gifs } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'w703POlhQTfwMTTsTEE6QUepWDbIXTqB';

  private _historial: string[] = [];

  //TODO: cambiar any por su tipo
  public resultados: Gifs[] = [];

  get historial(){
    return [ ...this._historial];
  }

  constructor(private httpClient: HttpClient){
     this._historial = JSON.parse(localStorage.getItem('historial')! ) || [];

     this.resultados = JSON.parse(localStorage.getItem('resultados')! ) || [];

     
  }

  buscarGifs( query: string = ''){

    query = query.trim().toLocaleLowerCase();
    

    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.httpClient.get<GIFSearch>(`https://api.giphy.com/v1/gifs/search?api_key=w703POlhQTfwMTTsTEE6QUepWDbIXTqB&q=${ query }&limit=10`)
              .subscribe(resp =>{
                console.log(resp);
                this.resultados = resp.data;
                localStorage.setItem('resultados', JSON.stringify(this.resultados));
              })    

  }
}
