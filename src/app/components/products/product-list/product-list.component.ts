import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipe} from 'ng2-search-filter';
import { AuthService } from '../../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database'; 
import { Observable } from 'rxjs/internal/Observable';
import { observable, Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
 
  constructor(
    private productService: ProductService,
    private toastr: ToastrService, private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage) { }


  ngOnInit() {
    return this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);


  }
  onDelete($key: string) {
    if (confirm('¿Estas Seguro de Querer Eliminarlo?')) {
      this.productService.deleteProduct($key);
      this.toastr.success("Successfull Operation", "Producto Eliminado");
    }



  }

getFiltro(product: Product){
  this.productService.getFiltro
}
}
