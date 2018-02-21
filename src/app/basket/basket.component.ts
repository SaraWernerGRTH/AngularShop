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
    ngOnInit() { 
      this.shoppingChrtService.getProduct()
      .subscribe((e: any) => {
        console.log('ScrollSpy::test: ', e);
        this.items = e;
        this.items=this.items.filter(p=>p.itemCount>0);
        this.totalSum=this.items.length;
        this.items.forEach(element => {
          this.totalAmount+=element.itemCount;
          if(element.itemCount){
            this.totalPrice+=element.itemCount*element.price;
          }
        });
        
    });
    }

}