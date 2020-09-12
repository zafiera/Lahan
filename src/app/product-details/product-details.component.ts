import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  constructor(
    private db: AngularFirestore,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.paramMap.get('product-id');

    this.db.collection('products').doc(productId).valueChanges().subscribe(product => {
      this.product = product;
    });
  }

}
