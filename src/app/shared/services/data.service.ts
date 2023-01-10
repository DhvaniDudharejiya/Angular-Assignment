import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  baseURL = "http://localhost:3000/Employee"
  constructor(private http : HttpClient) { } //inject dependencey
//connect to server
//this method of service will return the output it gets from the http.get() method
  getrecords(){
    // return this.http.get('http://localhost:3000/Employee') 
    return this.http.get(this.baseURL) 
  }

  deleteRecord(id:any){
    // return this.http.delete('http://localhost:3000/Employee'//this.baseURL) 
    const delURL = `${this.baseURL}/${id}` //use backtick
    // console.log("[DELETE URL]" + delURL)
    return this.http.delete(delURL) 
  }

  addRecord(empData:any){
    return this.http.post(this.baseURL,empData)
  }
}
