import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import{Item} from '../domain/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public create (item: Item): Observable<Item> {
    return this.http.post<Item>(
      `${environment.wimsyUrl}/item`, 
      item,
      this.httpOptions
    )
  }

  public retrieveAll(): Observable<Item[]> {
    return this.http.get<Item[]>(
      `${environment.wimsyUrl}/item`);
  }

  public update (item: Item): Observable<Item> {
    return this.http.put<Item>(
      `${environment.wimsyUrl}/item`, 
      item,
      this.httpOptions
    )
  }
}
