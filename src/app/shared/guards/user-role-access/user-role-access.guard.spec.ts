import { TestBed } from '@angular/core/testing';

import { UserRoleAccessGuard } from './user-role-access.guard';

describe('UserRoleAccessGuard', () => {
  let guard: UserRoleAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserRoleAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
