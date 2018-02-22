import { Component, OnInit } from '@angular/core';
import { ShoppingChrtService } from '../shopping-chrt.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private shoppingChrtService:ShoppingChrtService) { }

   items:any;
   itemInBasket:number;
   currentItemId:number;
  // items=[
  //   {  id:1, title : "iphone", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/1-Mobile-Phones-Voodoo-Cat-tile.jpg", alt:"An iphone", max:10, remark:""},
  //   {  id:2, title : "Laptop", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/2-Laptops-Voodoo-Cat-tile.jpg", alt:"A Laptop", max:10, remark:"" },
  //   {  id:3, title : "TV", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/6-Television-Voodoo-Cat-tile.jpg", alt:"TV", max:10 , remark:""},
  //   {  id:4, title : "iphone", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/1-Mobile-Phones-Voodoo-Cat-tile.jpg", alt:"An iphone", max:10, remark:""},
  //   {  id:5, title : "Laptop", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/2-Laptops-Voodoo-Cat-tile.jpg", alt:"A Laptop", max:10, remark:"" },
  //   {  id:6, title : "TV", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/6-Television-Voodoo-Cat-tile.jpg", alt:"TV", max:10 , remark:""},
  //   {  id:7, title : "Laptop", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/2-Laptops-Voodoo-Cat-tile.jpg", alt:"A Laptop", max:10, remark:"" },
  //   {  id:8, title : "TV", itemCount : 0, src:"https://images-eu.ssl-images-amazon.com/images/G/31/img15/Electronics/Cat-Navs/6-Television-Voodoo-Cat-tile.jpg", alt:"TV", max:10 , remark:""}
  // ];
  remark(id){
    this.currentItemId=id;
    this.items[id-1].remark="Oooops"
    setTimeout(()=>{
      this.items[this.currentItemId-1].remark=""
    },500);
  }
  addItem(id) { 
    if(this.items[id-1].max!=this.items[id-1].itemCount){
      this.items[id-1].itemCount++;
      this.updateItem(id,this.items[id-1]);
    } else{
      this.remark(id);
    }
 } 

 removeItem(id) { 
  if(this.items[id-1].itemCount>=1){
    this.items[id-1].itemCount--;
    this.updateItem(id,this.items[id-1]);
  } else{
    this.remark(id);
  }
} 

 updateItem(id,newCount){
    this.shoppingChrtService.updateItem(id,newCount)
    .subscribe((e: any) => {
      console.log('ScrollSpy::test: ', e);
      this.items = e;
      this.shoppingChrtService.getProduct()
      .subscribe((ee: any) => {
        console.log('ScrollSpy::test: ', ee);
        this.items = ee;
        this.itemInBasket=this.items.filter(p=>p.itemCount>0).length;        
    });
  });
 }

  ngOnInit() { 
    this.shoppingChrtService.getProduct()
    .subscribe((e: any) => {
      console.log('ScrollSpy::test: ', e);
      this.items = e;
      this.itemInBasket=this.items.filter(p=>p.itemCount>0).length;
  });
  }

}