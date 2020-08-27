import { TestBed, async, inject } from '@angular/core/testing';

import { HomepageGuard } from './homepage.guard';

describe('HomepageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomepageGuard]
    });
  });

  it('should ...', inject([HomepageGuard], (guard: HomepageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
