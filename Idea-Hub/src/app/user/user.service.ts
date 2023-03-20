import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  registerUser(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/register`,body);
  }
  loginUser(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/login`,body);
  }
  viewProfile(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/viewProfile`,body);
  }
  validateUser(UserName:any):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/validateUser/${UserName}`);
  }
  validateEmail(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/validateEmail`,body);
  }
  validateToken(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/validateToken`,body);
  }
  updatePassword(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/updatePassword`,body);
  }

}

