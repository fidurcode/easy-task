import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  get imagePath() {
    return this.user.avatar;
  };

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
