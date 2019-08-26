import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Position} from '../types/position.type';

@Injectable()
export class ImageEditorService {

  positionChanged$ = new Subject<{position: Position, value: string}>();
  descriptionChanged$ = new Subject<{value: string}>();
  colorChanged$ = new Subject<{value: string}>();

  constructor() {
  }

}
