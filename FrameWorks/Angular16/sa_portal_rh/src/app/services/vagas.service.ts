import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = "http://localhost:3000/vagas"; // endereço da Api

  constructor(private http: HttpClient ) { }


  //criar os métodos para conexão com a apiREST

  //get - obter a lista de vagas
  getVagas():Observable<Vaga[]> { //observable -> rxjs => tradutor de Json -> typescript
    return this.http.get<Vaga[]>(this.apiUrl); //conecta com a API para pegar os Dados
  }

  //post

  //put

  //delete
}
