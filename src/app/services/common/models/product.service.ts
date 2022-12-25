import { Injectable } from '@angular/core';
import { CreateProduct } from 'src/app/contracts/createProduct';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  create(product : CreateProduct, successCallBack?:any){
    this.httpClientService.post<CreateProduct>({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
    });
  }
}
