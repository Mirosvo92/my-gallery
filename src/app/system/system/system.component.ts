import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.checkOnChildRout();
  }

  private checkOnChildRout() {
    if (!this.activeRouter.children.length) {
      this.router.navigate(['system', 'gallery']);
    }
  }

}
