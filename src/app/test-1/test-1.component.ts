import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-1',
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.css'

})
export class Test1Component {

  constructor(private router : Router){}

  test2(){
    this.router.navigate(['/test-2'])
  }

}
