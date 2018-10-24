import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../user/models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  private users: User[]; // Hold users that are returned at the back 
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    },(error) => {
      console.log(error);
    })
  }

  userData: object[] = [
    { id: this.users, 
      name: this.users, 
      cell: this.users,  
      email: this.users, 
      department: this.users
    },
  ];
  private sorted = false;

  // 
  sortBy(by: string | any): void {
    this.userData.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });
    this.sorted = !this.sorted;
  }

}
