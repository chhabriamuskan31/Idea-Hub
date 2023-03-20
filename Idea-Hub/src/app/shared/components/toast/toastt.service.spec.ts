import { TestBed } from '@angular/core/testing';

import { ToasttService } from './toastt.service';

describe('ToasttService', () => {
  let service: ToasttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
