import { TestBed } from '@angular/core/testing';

import { ImpExperienciaServiceService } from './imp-experiencia-service.service';

describe('ImpExperienciaServiceService', () => {
  let service: ImpExperienciaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpExperienciaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
