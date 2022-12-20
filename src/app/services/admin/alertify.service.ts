import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string, messageType:MessageType, position:Position, delay:Number=3){
    alertify.set('notifier','delay', delay);
    alertify.set('notifier','position',position);
    alertify[messageType](message);
  }

  dismiss(){
    alertify.dismiss();
  }
}

export enum MessageType{
  Error ="error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position{
  TopRight  = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}