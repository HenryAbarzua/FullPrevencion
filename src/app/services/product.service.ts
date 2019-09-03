import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product= new Product();

  constructor( private firebase: AngularFireDatabase) { }

  getProducts(){

    this.productList = this.firebase.list('products')
    return this.productList;
  }

  insertProduct(product: Product)
  {
   this.productList.push({
     name: product.name,
     category: product.category,
     location: product.location,
     price: product.price,
     fecha: product.fecha
   }); 
  }
  updateProduct(product: Product)
  {
  this.productList.update(product.$key, {
    name: product.name,
     category: product.category,
     location: product.location,
     price: product.price,
     fecha: product.fecha
  });
  }
  
  deleteProduct($key: string){
    this.productList.remove($key);

  }

  getFiltro(filtro: string){
    this.productList = this.firebase.list('/product'),{
      query:{
        orderByChild: 'fecha',
        equalTo: filtro
      }
    }
   }
}
