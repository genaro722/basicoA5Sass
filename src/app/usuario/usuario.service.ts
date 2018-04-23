import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get('http://relma.herokuapp.com/api/categorias').toPromise();
  }
}
