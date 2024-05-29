import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { Router} from '@angular/router'
import { NotificationService } from '../../services/notification.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, ReactiveFormsModule, TitleComponent, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass',
  providers: [provideNgxMask()]
})
export class RegisterComponent  implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private localStorageService: LocalstorageApiService,
    private router: Router,private notification: NotificationService) {
    this.formulario = this.fb.group({
      name: ['', {
        validators: Validators.required,
        message: 'Nome é obrigatório.'
      }],
      email: ['', {
        validators: [Validators.required, Validators.email],
        message: 'Email inválido.'
      }],
      phone: ['', {
        validators: [Validators.minLength(11), Validators.maxLength(11)],
        message: 'Telefone deve ter exatamente 11 caracteres.'
      }]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formulario.valid) {
      this.localStorageService.addPerson(this.formulario.value).subscribe(
        () => {
          this.router.navigate(['/']);
          this.notification.showSuccess('Usuário criado com sucesso')
        },
        error => {
          this.notification.showError('Ocorreu um erro ao salvar')
        }
      );
    }
  }
}
