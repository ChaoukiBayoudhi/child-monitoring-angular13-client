import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Parent } from '../models/parent.model';
const apiUrl='http://localhost:9592/parents';
@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }
   allParents():Observable<Parent[]>{
     return this.http.get<Parent[]>(apiUrl+'/all');
   }

   getParent(id:any):Observable<any>{
     //return this.http.get(`${apiUrl}/parent/${id}`);
     return this.http.get(apiUrl+'/parent/'+id);
   }

   addParent(parent:any):Observable<any>{
     return this.http.post(apiUrl+'/new',parent);
   }

   allchildren(id:any):Observable<any>{
     return this.http.get(`${apiUrl}/children/${id}`);
   }
   findByName(name:string):Observable<any>{
     return this.http.get(`${apiUrl}/parent/${name}`);
   }
   deleteAll(){
     return this.http.delete(apiUrl+'/remove-parent');
   }

}
