import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import{Form} from '../domain/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public create(addForm: Form): Observable<Form> {
    return this.http.post<Form>(
      `${environment.wimsyUrl}/`, 
      addForm,
      this.httpOptions
    ).pipe();
  }

  public update(moveForm: any): Observable<Form> {
    return this.http.put<Form>(
      `${environment.wimsyUrl}/` + `${moveForm.itemName}` + `/${moveForm.itemDescription}` + `/${moveForm.containerName}` + `/${moveForm.locationName}`, 
      moveForm,
      this.httpOptions
    )
  }


}
