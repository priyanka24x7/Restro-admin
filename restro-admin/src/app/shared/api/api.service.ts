import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = "http://localhost:3000/resto/";

  constructor(private _http: HttpClient) { }

  private _refreshList$ = new Subject<any>();

  get refreshList$() {
    return this._refreshList$;
  }

  getRestro(){
    return this._http.get(this.url);
  }

  addRestro(data:any){
    return this._http.post(this.url, data)
    .pipe(
      tap(() => {
        this._refreshList$.next();
      })
    );
  }

  deleteRestro(id:any){
    return this._http.delete(this.url + `${id}`)
    .pipe(
      tap(() => {
        this._refreshList$.next();
      })
    );
  }

  updateRestro(id:any, data:any){
    return this._http.put(this.url + `${id}`, data)
    .pipe(
      tap(() => {
        this._refreshList$.next();
      })
    );
  }

}
