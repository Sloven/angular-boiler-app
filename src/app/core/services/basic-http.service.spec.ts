import { TestBed, inject } from '@angular/core/testing';

import { BasicHttpService } from './basic-http.service';

describe('BasicHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicHttpService]
    });
  });

  it('should be created', inject([BasicHttpService], (service: BasicHttpService) => {
    expect(service).toBeTruthy();
  }));
});
