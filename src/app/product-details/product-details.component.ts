import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
shoppingCart: any[] = [];
counter = 0;
  product;
  constructor(
    private db: AngularFirestore,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    const productId = this.activatedRoute.snapshot.paramMap.get('product-id');

    this.db.collection('products').doc(productId).valueChanges().subscribe(product => {
      this.product = product;
      console.log(this.product);
      
    });
  }

  plus(){
    this.counter++;
  }

  minus(){
    this.counter --;
  }

  addToCart(product){
    
    this.shoppingCart.push(product);
  
    sessionStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    sessionStorage.getItem("shoppingCart", JSON.parse(this.shoppingCart));

    
    
    
  }

}
