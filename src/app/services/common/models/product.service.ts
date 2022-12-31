import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from 'src/app/contracts/createProduct';
import { List_Product } from 'src/app/contracts/list_Product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  create(product : CreateProduct, successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void){
    this.httpClientService.post<CreateProduct>({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
    });
  }

  async read(successCallBack? : ()=>void, errorCallBack? :(errorMessage:string)=>void): Promise<List_Product[]>{
   const promiseData : Promise<List_Product[]> = this.httpClientService.get<List_Product[]>({
      controller : "products"
    }).toPromise();

    promiseData.then(d=>successCallBack())
    .catch((errorResponse : HttpErrorResponse)=>errorCallBack(errorResponse.message))

    return await promiseData;

  }

}
