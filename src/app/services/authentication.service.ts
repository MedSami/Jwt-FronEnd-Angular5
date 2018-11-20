import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
@Injectable()
export class AuthenticationService {
private host: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }
private jwtToken= null ;
private roles:Array<any>;

login(user) {
  return this.http.post(this.host + "/login", user, {observe: 'response'});
}

isAdmin(){
for (let r of this.roles ){
  if(r.authority=='ADMIN'){
  return true;
}else {
  return false;
}
}
}
saveToken(jwt:string){
  this.jwtToken=jwt;
  localStorage.setItem("token",jwt);
  let jwtHelper = new JwtHelper();
  this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
}

loadToken(){
  this.jwtToken=localStorage.getItem('token');
}
getTasks(){
  if(this.jwtToken==null) this.loadToken();
  return this.http.get(this.host+'/tasks',
  {headers: new HttpHeaders({'authorization':this.jwtToken})});
}

logOut(){
  this.jwtToken=null;
  localStorage.removeItem('token');
}

saveTask(task){

  return this.http.post(this.host+'/tasks',task,
  {headers: new HttpHeaders({'authorization':this.jwtToken})});
}
}
