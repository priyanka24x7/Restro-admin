import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = "http://localhost:3000/resto";

  constructor(private _http: HttpClient) { }

  getRestro(){
    return this._http.get(this.url);
  }

  addRestro(data:any){
    return this._http.post(this.url, data)
  }
}
