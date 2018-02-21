import { TestBed, inject } from '@angular/core/testing';

import { ShoppingChrtService } from './shopping-chrt.service';

describe('ShoppingChrtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingChrtService]
    });
  });

  it('should be created', inject([ShoppingChrtService], (service: ShoppingChrtService) => {
    expect(service).toBeTruthy();
  }));
});
