import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEditorItemComponent } from './image-editor-item.component';

describe('ImageEditorItemComponent', () => {
  let component: ImageEditorItemComponent;
  let fixture: ComponentFixture<ImageEditorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEditorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEditorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
