import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
declare var alertify:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private alertify:AlertifyService) {}
  
  ngOnInit():void{
    this.alertify.message("Merhaba", MessageType.Error,Position.BottomRight);
  }
}


