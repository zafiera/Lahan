import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(
    private db: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.db.collection('/products').snapshotChanges().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });

  }

  viewProduct(product) {
    const productId = product.id;
    this.router.navigateByUrl(`/product-details/${productId}`);
  }
}
