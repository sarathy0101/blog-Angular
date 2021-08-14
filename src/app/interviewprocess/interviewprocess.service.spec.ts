import { TestBed } from '@angular/core/testing';

import { InterviewprocessService } from './interviewprocess.service';

describe('InterviewprocessService', () => {
  let service: InterviewprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
