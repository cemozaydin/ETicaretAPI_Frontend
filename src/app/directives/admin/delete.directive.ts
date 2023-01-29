import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';

declare var $ : any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {
  
  @Input() id : number;
  @Input() controller : string;
  @Output() callback : EventEmitter<any> = new EventEmitter();
  
  constructor(
    private element:ElementRef, 
    private _renderer:Renderer2, 
    private httpClientService:HttpClientService,
    public dialog: MatDialog,
    private alertifyService : AlertifyService
    ){
        const img = _renderer.createElement("img");
        img.setAttribute("src","../../../../../assets/delete.png");
        img.setAttribute("style","cursor:pointer");
        img.width=23;
        img.height=23;
        _renderer.appendChild(element.nativeElement,img);
      }

      @HostListener("click")
      async onClick(){
        this.openDialog(async ()=>{
          const td : HTMLTableCellElement = this.element.nativeElement;
          //await this.productService.delete(this.id);
          this.httpClientService.delete({
            controller:this.controller
          },this.id).subscribe(data=>{
            $(td.parentElement).fadeOut(1000, ()=>{
              this.callback.emit();
              this.alertifyService.message("Ürün başarıyla silinmiştir.",{
                dismissOthers:true,
                messageType:MessageType.Success,
                position:Position.TopRight
              })
            });
          },(errorResponse: HttpErrorResponse)=>{
            this.alertifyService.message("Ürün silme başarısız oldu!",{
              dismissOthers:true,
              messageType:MessageType.Error,
              position:Position.TopRight
            })
          });          
        });
      }

      openDialog(afterClosed: any): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
          width : '250px',
          data: DeleteState.Yes,
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if(result==DeleteState.Yes){
            afterClosed();
          }
        });
      }
    }
    
