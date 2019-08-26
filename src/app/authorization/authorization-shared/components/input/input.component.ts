import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';
import {controlContainerFactory} from '../../../../shared/settings';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: controlContainerFactory,
    deps: [[new Optional(), NgForm]]
  }]
})
export class InputComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;
  @Input() minLength = 1;
  @Input() type = 'text';
  @Input() isEmail = false;

  constructor() { }

  ngOnInit() {}

}
