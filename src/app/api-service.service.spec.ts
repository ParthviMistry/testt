import { TestBed } from '@angular/core/testing';

import { TodoServiceService } from './api-service.service';

describe('TodoServiceService', () => {
  let service: TodoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
