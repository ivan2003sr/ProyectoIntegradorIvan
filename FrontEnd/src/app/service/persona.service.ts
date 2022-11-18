import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/usuarios/';
  URL='https://bknd-portfolio-ivan.herokuapp.com/usuarios/'
  constructor(private http: HttpClient ) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer/perfil');
    
  }
}
