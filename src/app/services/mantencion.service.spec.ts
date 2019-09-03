import { TestBed } from '@angular/core/testing';

import { MantencionService } from './mantencion.service';

describe('MantencionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantencionService = TestBed.get(MantencionService);
    expect(service).toBeTruthy();
  });
});
