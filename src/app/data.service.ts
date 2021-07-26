import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly APIUrl="https://localhost:5001";

  constructor(private http: HttpClient) { }

  getWalkInList():Observable<any[]>{
    console.log(this.http.get<any>(this.APIUrl + '/sp'))
    return this.http.get<any>(this.APIUrl + '/sp');
  }
}
