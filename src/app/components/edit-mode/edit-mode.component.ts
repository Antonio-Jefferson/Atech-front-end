import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user-event.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-edit-mode',
  standalone: true,
  imports: [CommonModule, TitleComponent, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './edit-mode.component.html',
  styleUrl: './edit-mode.component.sass',
  providers: [provideNgxMask()]
})
export class EditModeComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditModeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private localStorageService: LocalstorageApiService,
    private notificationService: NotificationService,
    private userService: UserService
  ) {
    const userData = this.data.user;
    this.formulario = this.fb.group({
      name: [userData.name, Validators.required],
      email: [userData.email, [Validators.required, Validators.email]],
      phone: [userData.phone, [Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.formulario.valid) {
      const id = this.data.user.id;
      const updatedPerson = this.formulario.value;
      this.localStorageService.updatePerson(id, updatedPerson).subscribe(
        () => {
          this.dialogRef.close(true);
          this.notificationService.showSuccess("Usuário alterado com sucesso");
          this.userService.emitUserEdited();
        },
        error => {
          this.notificationService.showError('Erro ao salvar os dados. Por favor, tente novamente.');
        }
      );
    } else {
      const phoneControl = this.formulario.get('phone');
      if (phoneControl && (phoneControl.errors?.['minlength'] || phoneControl.errors?.['maxlength'])) {
        this.notificationService.showError('Número inválido, precisa ter exatamente 11 números.');
      } else {
        this.notificationService.showError('Preencha todos os campos corretamente.');
      }
    }
  }
}
