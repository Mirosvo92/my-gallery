import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEditorControlComponent } from './image-editor-control.component';

describe('ImageEditorControlComponent', () => {
  let component: ImageEditorControlComponent;
  let fixture: ComponentFixture<ImageEditorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEditorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEditorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
