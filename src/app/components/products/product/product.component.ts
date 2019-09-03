import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductListComponent } from '../product-list/product-list.component';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }
  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
      this.productService.insertProduct(productForm.value)
    else
      this.productService.updateProduct(productForm.value);
    this.resetForm(productForm);
    this.toastr.success('Successful Operation', "SuccessfulOperation")


  }

  resetForm(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.productService.selectedProduct = new Product();
  }

}
