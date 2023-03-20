import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private httpClient : HttpClient) { }


  fetchBlogs(): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/blogs`,{withCredentials:true});
  }
  fetchBlog(slug:String): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/blog/${slug}`);
  }
  getCategories(): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/categories`);
  }
  validateSlug(slug:String): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/checkSlug/${slug}`);
  }
  matchTags(tags:String): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/matchTags/${tags}`);
  }
  viewProfile(userID:String): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/viewProfile/${userID}`);
  }
  insertPost(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.API_URL}/blogs`,body);
  }
  uploadFile(file:any):Observable<any>{
    const formData = new FormData()
    formData.append('file',file)
    // console.warn("formData")
    return this.httpClient.post(`${ApplicationConstants.API_URL}/uploadFile`,formData);
  }
  download(PostID:any):Observable<any> {

    return this.httpClient.get(`${ApplicationConstants.API_URL}/downloadDocument/${PostID}`, { responseType:'blob'});
  }
  


}
