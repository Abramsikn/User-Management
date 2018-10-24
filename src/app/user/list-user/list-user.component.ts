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

  tableData: object[] = [
    { id: '1', name: 'Mark', cell: '0791134842', email: 'g@reverside.co.za', department: 'Reverside' },
    { id: '1', name: 'Mark', cell: '0791134842', email: 'g@reverside.co.za', department: 'Reverside' },
    { id: '1', name: 'Mark', cell: '0791134842', email: 'g@reverside.co.za', department: 'Reverside' },
  ];
  private sorted = false;

  // 
  sortBy(by: string | any): void {
    this.tableData.sort((a: any, b: any) => {
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
