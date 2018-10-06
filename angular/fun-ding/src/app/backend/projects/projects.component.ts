import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  url = 'http://192.168.178.50:8080/';

  constructor(private http: HttpClient) {
    console.log('Calling');
    this.getIt();
  }

  async getIt() {
    const test = await this.http.get(this.url + 'api/project').toPromise();
    console.log('INIT');
    console.log(test);
  }

  ngOnInit() {

  }

}
