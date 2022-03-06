import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpService : HttpClient) { }

  getData(url) : Observable<any>
  {
    return this.httpService.get(url);
  }

  insertData(url, data) : Observable<any>
  {
    return this.httpService.post(url, data);
  }

  removeData(url) : Observable<any>
  {
    return this.httpService.delete(url);
  }

  updateData(url, data) : Observable<any>
  {
    return this.httpService.put(url, data);
  }

}
