import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';
import { element } from 'protractor';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-mantencion-proxima',
  templateUrl: './mantencion-proxima.component.html',
  styleUrls: ['./mantencion-proxima.component.css']
})
export class MantencionProximaComponent implements OnInit {

mantencionProxima: Product[];

  constructor( private productService: ProductService,
    private toastr: ToastrService, private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    return this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.mantencionProxima=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mantencionProxima.push(x as Product);
      })
    })
  }
  gotoProduct(){
    this.router.navigate(['component/product'])

  
  }

}
