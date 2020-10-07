import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';
import { FeaturedComponent } from './featured/featured.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule  } from "@angular/forms"; 
import {MatIconModule} from "@angular/material";
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'product-details/:product-id', component: ProductDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavigationComponent,
    SecondaryNavigationComponent,

    FeaturedComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    MatIconModule,
    MatSliderModule,
    MatFormFieldModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
