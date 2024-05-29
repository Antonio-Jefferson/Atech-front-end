import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDeletedSource = new Subject<void>();
  private userUpdatedSource = new Subject<void>();

  userDeleted$(): Observable<void> {
    return this.userDeletedSource.asObservable();
  }

  userUpdated$(): Observable<void> {
    return this.userUpdatedSource.asObservable();
  }

  deleteUser() {
    this.userDeletedSource.next();
  }

  updateUser() {
    this.userUpdatedSource.next();
  }
}
