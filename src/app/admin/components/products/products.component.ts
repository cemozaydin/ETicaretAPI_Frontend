import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/createProduct';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

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
    //this.showSpinner(SpinnerType.BallAtom);    
   
  }

  @ViewChild(ListComponent) listComponents : ListComponent;

  createdProduct(createdProduct:CreateProduct){
      this.listComponents.getProducts();
  }

}
