import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent {
  responseData: any;
  displayedColumns: string[] = ['name', 'job', 'id', 'createdAt'];

  constructor(private http: HttpClient, private router: Router) {}

  postData() {
    const url = 'https://reqres.in/api/users';
    const data = {
      name: 'John Doe',
      job: 'Developer'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(url, data, { headers }).subscribe(
      response => {
        console.log(response);
        this.responseData = response;
      },
      error => {
        console.error('Error!', error);
      }
    );
  }

  home() {
    this.router.navigate(['/']);
  }
}
