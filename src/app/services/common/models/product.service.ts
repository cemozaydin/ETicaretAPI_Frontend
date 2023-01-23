import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
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
 
  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void)
    : Promise<{totalCount:number,products:List_Product[]}> {
      const promiseData: Promise<{totalCount:number,products:List_Product[]}> = firstValueFrom(this.httpClientService.get<{totalCount:number,products:List_Product[]}>({
        controller: "products",
        queryString: `page=${page}&size=${size}`
    }));

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));
    
    return await promiseData;
  }

}
