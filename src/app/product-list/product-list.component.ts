import { Component } from '@angular/core';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name = "";
  addToCart : number = 0;
  product = {
    name  : "IPhone",
    price  : 799,
    color : 'Red',
    discount : 8.5,
    inStock : 5,
    imgUrl : "assets/iphone.png"
  }
  
  getDiscountedPrice(){
    return this.product.price - (this.product.price*this.product.discount)/100;
  }

  // onNameChange(event:any){
  //   this.name = event.target.value;
  //   console.log(event.target.value);
  // }

  incrementCartValue(){
      this.addToCart++;
  }
  decrementCartValue(){
      this.addToCart--;
  }
}
