import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantencionComponent } from './mantencion.component';

describe('MantencionComponent', () => {
  let component: MantencionComponent;
  let fixture: ComponentFixture<MantencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
