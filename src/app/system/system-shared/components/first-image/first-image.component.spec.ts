import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstImageComponent } from './first-image.component';

describe('FirstImageComponent', () => {
  let component: FirstImageComponent;
  let fixture: ComponentFixture<FirstImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
