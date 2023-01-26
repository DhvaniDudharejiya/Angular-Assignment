import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  // baseURL = "http://localhost:3000/Employee"  // old url

  //new url for global service
  baseURL = "http://localhost:3000/"

  constructor(private http: HttpClient) { } //inject dependencey



  //connect to server *****************************************************************
  //this method of service will return the output it gets from the http.get() method
  getrecords(table: string) {
    // return this.http.get('http://localhost:3000/Employee') 
    return this.http.get(this.baseURL + table)
  }


  //to read a single record ***********************************************************
  getrecord(table: string, id: any) {
    const getURL = `${this.baseURL}${table}/${id}`
    return this.http.get(getURL)

  }


  //delete record **************************************************************************
  deleteRecord(table: string, id: any) {
    // return this.http.delete('http://localhost:3000/Employee'//this.baseURL) 
    const delURL = `${this.baseURL}${table}/${id}` //use backtick
    // console.log("[DELETE URL]" + delURL)
    return this.http.delete(delURL)
  }



  //Add record ***********************************************************************
  addRecord(table: string, empData: any) {
    return this.http.post(this.baseURL + table, empData)
  }

  //update record ****************************************************************
  updateRecord(table: string, empData: any) {
    const putURL = `${this.baseURL}${table}/${empData.id}`
    return this.http.put(putURL, empData)
  }

//Store the user in the sessionStorage
  signIn(user:string){
    sessionStorage.setItem("user_key",user)
  }
  // Remove the user from the sessionStorage
  signOut(){
    sessionStorage.removeItem("user_key")
  }
}
