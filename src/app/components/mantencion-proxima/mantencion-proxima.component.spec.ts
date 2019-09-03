import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantencionProximaComponent } from './mantencion-proxima.component';
import { ProductComponent} from '../products/product/product.component';
import { from } from 'rxjs';
describe('MantencionProximaComponent', () => {
  let component: MantencionProximaComponent;
  let fixture: ComponentFixture<MantencionProximaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantencionProximaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantencionProximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
