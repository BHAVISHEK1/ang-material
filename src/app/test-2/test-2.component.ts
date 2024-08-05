import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-2',
  templateUrl: './test-2.component.html',
  styleUrl: './test-2.component.css'
})
export class Test2Component {

  constructor(private router : Router){}

  test1(){
    this.router.navigate(['/test-1'])
  }


}
