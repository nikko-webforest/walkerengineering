import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  products: any = [];
  featuredProducts: any = [];
  ready: boolean = false;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProductsToFeature();
  }

  fetchProductsToFeature() {
    this.productsService.getAllProducts().subscribe((results: any) => {
      this.products = results.data.products.nodes;

      const indexesToFeature = this.randomFeature();
      const productsToFeature: any = [];

      indexesToFeature.forEach((index) => {
        productsToFeature.push(this.products[index]);
      });

      this.featuredProducts = productsToFeature;
      this.ready = true;
      console.log(this.featuredProducts);
    });
  }

  randomFeature() {
    let indexFeatured: number[] = [];

    for (let i = 0; i < 3; i++) {
      const ranNum = Math.floor(Math.random() * this.products.length);
      if (!indexFeatured.includes(ranNum)) {
        indexFeatured.push(ranNum);
      }
    }
    return indexFeatured;
  }

  formatPrice(currencyCode: any, valuePrice: any) {
    // console.log('currencyCode =', currencyCode);
    // console.log('valuePrice =', valuePrice);
    const amount = Number(valuePrice).toLocaleString('en-US', {
      style: 'currency',
      currency: currencyCode,
    });
    // console.log('ammount =', amount);
    return amount;
  }
}
