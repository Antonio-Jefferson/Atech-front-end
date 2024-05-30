import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user-event.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent, RouterTestingModule, NoopAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 })
          }
        },
        {
          provide: LocalstorageApiService,
          useValue: {
            getPersonById: () => of({ id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '12345678901' })
          }
        },
        { provide: NotificationService, useValue: { showError: (msg: string) => {}, showSuccess: (msg: string) => {} } },
        { provide: UserService, useValue: { userEdited$: of() } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
