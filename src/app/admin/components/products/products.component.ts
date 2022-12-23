import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  extends BaseComponent implements OnInit {
  constructor(spinner : NgxSpinnerService, private httpClientService:HttpClientService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    
    this.httpClientService.get<Product[]>({
      controller:"products"   
    }).subscribe(data => console.log(data));
  
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   productName:"kalem",
    //   stock:13,
    //   price:25
    // }).subscribe();

// this.httpClientService.put({
//       controller:"products"
//     },{
//       id:8,
//       productName:"kalem update",
//       stock:5,
//       price:20
//     }).subscribe();

    // this.httpClientService.delete({
    //     controller:"products"
    //   },8).subscribe();
  
  
  }

}
