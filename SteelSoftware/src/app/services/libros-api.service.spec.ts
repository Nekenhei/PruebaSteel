import { TestBed } from '@angular/core/testing';

import { LibrosAPIService } from './libros-api.service';

describe('LibrosAPIService', () => {
  let service: LibrosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
