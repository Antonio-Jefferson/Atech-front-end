import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Person } from '../../model/person.model';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditModeComponent } from '../../components/edit-mode/edit-mode.component';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MainLayoutComponent, TitleComponent, MatIconModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.sass',
  animations: [
    trigger('if', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false <=> true', [animate('0.3s')])
    ])
  ]
})
export class UserDetailsComponent {
  userId!: number;
  user: Person | undefined;
  private userEditedSubscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private localStorageApiService: LocalstorageApiService,
    private notificationService: NotificationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        this.getUserDetails(this.userId);
      }
    });

    this.userEditedSubscription = this.userService.userEdited$.subscribe(() => {
      if (this.userId) {
        this.getUserDetails(this.userId);
      }
    });
  }

  ngOnDestroy(): void {
    this.userEditedSubscription.unsubscribe();
  }

  openEditMode(): void {
    const dialogRef = this.dialog.open(EditModeComponent, {
      width: '700px',
      height: '500px',
      data: { user: this.user }
    });
  }

  getUserDetails(id: number): void {
    this.localStorageApiService.getPersonById(id).subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.notificationService.showError('Usuário não encontrado');
      }
    });
  }
}
