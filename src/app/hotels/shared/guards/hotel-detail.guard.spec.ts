import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { HotelDetailGuard } from './hotel-detail.guard';

// describe('HotelDetailGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) =>
//       TestBed.runInInjectionContext(() => HotelDetailGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });

describe('HotelDetailGuard', () => {
  let guard: HotelDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HotelDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
