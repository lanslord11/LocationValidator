import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DataEntriesService {

  url = `http://localhost:4000/api/v1/dataEntry`

  constructor(private http:HttpClient) { }

  getEntries():Observable<any>{
    ;
    return this.http.get(this.url);
  }

  postEntries(data:any){

    return this.http.post(this.url,data);
  }

  deleteEntries(){
    return this.http.delete(this.url);
  }

  getLocation():Promise<any>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(response =>{
        resolve({latitude:response.coords.latitude,longitude:response.coords.longitude})
      })
    })
  }
}
