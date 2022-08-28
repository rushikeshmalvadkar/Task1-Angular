import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  //product:any = (data as any).default;

  constructor(private http : HttpClient) { }

  getProducts(){

    return this.http.get("assets/Products.json");
  }

}
