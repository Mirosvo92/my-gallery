import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryUploadImageComponent } from './gallery-upload-image.component';

describe('GalleryUploadImageComponent', () => {
  let component: GalleryUploadImageComponent;
  let fixture: ComponentFixture<GalleryUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
