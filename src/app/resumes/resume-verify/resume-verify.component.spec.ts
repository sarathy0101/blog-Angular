import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeVerifyComponent } from './resume-verify.component';

describe('ResumeVerifyComponent', () => {
  let component: ResumeVerifyComponent;
  let fixture: ComponentFixture<ResumeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
