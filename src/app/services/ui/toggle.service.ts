import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export default class ToggleService {
  private canShowPreview: boolean = false;
  private selectedItem: User | null = null;
  private subject = new Subject<any>();
  constructor() {}

  showPreview(): void {
    this.canShowPreview = true;
    this.subject.next(this.canShowPreview);
  }

  closePreview(): void {
    this.canShowPreview = false;
    this.subject.next(this.canShowPreview);
  }

  selectItem(user: User): void {
    this.selectedItem = user;
    this.subject.next(this.selectedItem);
  }
  onShowPreview(): Observable<any> {
    return this.subject.asObservable();
  }
  onSelectItem(): Observable<User> {
    return this.subject.asObservable();
  }
}
