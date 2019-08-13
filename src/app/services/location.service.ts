import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Location} from '../domain/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Location[]> {
    return this.http.get<Location[]>(
      `${environment.wimsyUrl}/`);
  }


}
