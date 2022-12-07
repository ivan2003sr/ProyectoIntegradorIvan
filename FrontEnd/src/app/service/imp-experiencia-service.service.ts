import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ImpExperienciaServiceService {
  URL = environment.URL + '/explab/'

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpclient.get<Experiencia[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpclient.get<Experiencia>(this.URL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpclient.post<any>(this.URL+'create',experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpclient.put<any>(this.URL + `update/${id}`,experiencia)
  }

  public delete(id: number): Observable<any>{
    return this.httpclient.delete<any>(this.URL + `delete/${id}`);
  }


}
