import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Container} from '../domain/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Container[]> {
    return this.http.get<Container[]>(
      `${environment.wimsyUrl}/`);
  }


}
