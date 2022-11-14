import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ImpExperienciaServiceService {
  expURL = 'http://localhost:8080/explab/'

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpclient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpclient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpclient.post<any>(this.expURL+'create',experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpclient.put<any>(this.expURL + `update/${id}`,experiencia)
  }

  public delete(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpclient.delete<any>(this.expURL + `delete/${id}`)
  }


}
