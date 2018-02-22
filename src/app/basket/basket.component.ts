import { Component, OnInit } from '@angular/core';
import { ShoppingChrtService } from '../shopping-chrt.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private shoppingChrtService:ShoppingChrtService) {}

    totalSum=0;
    items:any;
    totalAmount=0;
    totalPrice=0;

    removeItem(item){
      item.itemCount=0;
      this.shoppingChrtService.updateItem(item.id,item)
      .subscribe((e: any) => {
        this.upload();
      //   this.shoppingChrtService.getProduct()
      //   .subscribe((ee: any) => {
      //     this.items=ee.filter(p=>p.itemCount>0);        
      // });
    });
   }
    upload(){
      this.totalAmount=0;
      this.totalPrice=0; 
      this.shoppingChrtService.getProduct()
      .subscribe((e: any) => {
        this.items=e.filter(p=>p.itemCount>0);
        this.totalSum=this.items.length;
        this.items.forEach(element => {
          this.totalAmount+=element.itemCount;
          this.totalPrice+=element.itemCount*element.price;
        });
        
    });
    }
    ngOnInit() { 
     this.upload();
    }

}