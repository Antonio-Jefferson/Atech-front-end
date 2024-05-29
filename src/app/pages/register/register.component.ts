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
  imports: [MainLayoutComponent, ReactiveFormsModule, TitleComponent, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass',
  providers: [provideNgxMask()]
})
export class RegisterComponent  implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private localStorageService: LocalstorageApiService,
    private router: Router,private notification: NotificationService) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(11), Validators.maxLength(11)]]
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
    }  else {
      const phoneControl = this.formulario.get('phone');
      if (phoneControl && (phoneControl.errors?.['minlength'] || phoneControl.errors?.['maxlength'])) {
        this.notification.showError('Número inválido, precisa ter exatamente 11 números.');
      } else {
        this.notification.showError('Preencha todos os campos corretamente.');
      }
    }
  }
}
