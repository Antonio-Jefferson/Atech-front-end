import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDeletedSource = new Subject<void>();
  private userEditedSource = new Subject<void>();

  get userDeleted$(): Observable<void> {
    return this.userDeletedSource.asObservable();
  }

  get userEdited$(): Observable<void> {
    return this.userEditedSource.asObservable();
  }

  emitUserDeleted() {
    this.userDeletedSource.next();
  }

  emitUserEdited() {
    this.userEditedSource.next();
  }
}
