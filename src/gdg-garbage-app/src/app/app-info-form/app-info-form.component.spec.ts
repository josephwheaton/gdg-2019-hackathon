import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfoFormComponent } from './app-info-form.component';

describe('AppInfoFormComponent', () => {
  let component: AppInfoFormComponent;
  let fixture: ComponentFixture<AppInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
