import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListImagesItemComponent } from './gallery-list-images-item.component';

describe('GalleryListImagesItemComponent', () => {
  let component: GalleryListImagesItemComponent;
  let fixture: ComponentFixture<GalleryListImagesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryListImagesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListImagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
