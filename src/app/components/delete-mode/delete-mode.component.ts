import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user-event.service';

@Component({
  selector: 'app-delete-mode',
  standalone: true,
  imports: [DeleteModeComponent],
  templateUrl: './delete-mode.component.html',
  styleUrl: './delete-mode.component.sass'
})
export class DeleteModeComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteModeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private userService: UserService
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
    this.notificationService.showSuccess('Usuário deletado com sucesso!');
    this.userService.emitUserDeleted();
  }
}
