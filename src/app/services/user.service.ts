import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// decorator to make this service available for dependency injection throughout the application
@Injectable({
  providedIn: 'root'
})
export class UserService {
loggedUserId: string = "";
  constructor(private http: HttpClient) { 
    const loggedData = localStorage.getItem("studentId");
    if (loggedData != null){
      this.loggedUserId = loggedData;
    }
  }
  onUserLogin(obj:any){
return this.http.post('https://api.freeprojectapi.com/api/ProjectCompetition/login', obj)
  }

}
