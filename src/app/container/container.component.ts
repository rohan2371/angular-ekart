import { Component } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString : string[] = ["mark","Steve","Merry","John","Rohan"]
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
