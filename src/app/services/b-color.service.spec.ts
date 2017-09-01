import { TestBed, inject } from '@angular/core/testing';

import { BColorService } from './b-color.service';

describe('BColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BColorService]
    });
  });

  it('should be created', inject([BColorService], (service: BColorService) => {
    expect(service).toBeTruthy();
  }));
});
