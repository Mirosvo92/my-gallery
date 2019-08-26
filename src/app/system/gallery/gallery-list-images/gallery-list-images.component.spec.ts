import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListImagesComponent } from './gallery-list-images.component';

describe('GalleryListImagesComponent', () => {
  let component: GalleryListImagesComponent;
  let fixture: ComponentFixture<GalleryListImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryListImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
