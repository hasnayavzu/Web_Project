import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-grid';

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  constructor(private rs : RestService){}

  columns = ["No.", "Name", "Email", "Age", "DateOfBirth"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
        console.log(this.users);
        for (var user of this.users) {
          console.log(user);
        }
      },

      (error)=>
      {
        console.log("Error occured : "+error);
      }
    )
  }

}
