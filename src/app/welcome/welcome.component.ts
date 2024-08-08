// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-welcome',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.css']
// })
// export class WelcomeComponent {

//   constructor(private router: Router) {}

//   takeQuiz() {
//     this.router.navigate(['/quiz']);
//   }

//   testGet() {
//     this.router.navigate(['/dhan']);
//   }

//   testPost() {
//     this.router.navigate(['/dhan-post']);
//   }

//   testMaterial() {
//     window.location.href = 'https://ang-dhan-task-abhiyadav.netlify.app'; 
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router) {}

  takeQuiz() {
    this.router.navigate(['/quiz']);
  }

  testGet() {
    this.router.navigate(['/dhan']);
  }

  testPost() {
    this.router.navigate(['/dhan-post']);
  }

  testMaterial() {
    window.location.href = 'https://ang-dhan-task-abhiyadav.netlify.app/'; 
  }
}
