import { Component } from '@angular/core';
import { DUMMY_USERS } from "./user/dummy-user";

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(): User {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string): void {
   this.selectedUserId = id;
  }
}
