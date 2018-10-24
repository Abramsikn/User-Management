import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from '../user/models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string='http://localhost:8080/api'; //Port
  private headers = new Headers({'Content-Type': 'application/json'}); //Data
  private options = new RequestOptions({headers:this.headers});
  constructor(private _http: Http) { }

  // Create
  createUser(user:User){
    return this._http.post(this.baseUrl + '/users', JSON.stringify(user), this.options)
    .map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  // Retreive
  getUsers(){
    return this._http.get(this.baseUrl+'/users', this.options)
      .map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  // Retreive
  getUser(id:Number){
    return this._http.get(this.baseUrl + '/users/' + id, this.options)
      .map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  // Update
  updateUser(user:User){
    return this._http.put(this.baseUrl + '/users/', JSON.stringify(user), this.options)
    .map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  // Delete
  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/users/' + id, this.options)
    .map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
}
