import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  /**
   *
   */
  constructor(private spinner : NgxSpinnerService) {}

  showSpinner(spinnerNameType:SpinnerType){
    this.spinner.show(spinnerNameType);
    //setTimeout(()=>this.hideSpinner(spinnerNameType));

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.hideSpinner(spinnerNameType);
    }, 500);

  }

  hideSpinner(spinnerNameType:SpinnerType){
    this.spinner.hide(spinnerNameType,1000);
  }

}

export enum SpinnerType{
  BallAtom = "s1",
  SquareJellyBox = "s2",
  BallClipRotatePulse = "s3"
}
