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

  constructor(private httpClient: HttpClient){}

  buscarGifs( query: string = ''){

    query = query.trim().toLocaleLowerCase();
    

    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.httpClient.get<GIFSearch>(`https://api.giphy.com/v1/gifs/search?api_key=w703POlhQTfwMTTsTEE6QUepWDbIXTqB&q=${ query }&limit=10`)
              .subscribe(resp =>{
                console.log(resp);
                this.resultados = resp.data;
              })    

  }
}
