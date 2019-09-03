import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { createStorageRef } from '@angular/fire/storage';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() detalle: any = null;
  @Output() cerrar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
onCerrar(){
this.cerrar.emit();

}
}
