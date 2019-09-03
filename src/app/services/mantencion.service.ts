import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
import { Mantencion } from '../models/mantencion';

@Injectable({
  providedIn: 'root'
})
export class MantencionService {
  mantencionList: AngularFireList<any>
  selectedMantecion: Mantencion = new Mantencion();

  constructor(private firebase: AngularFireDatabase) { }

  getMantencion() {

    this.mantencionList = this.firebase.list('mantencion')
    return this.mantencionList;

  }

  insertMantencion(mantencion: Mantencion) {

    this.mantencionList.push({
  
    }

    )
  }
}
