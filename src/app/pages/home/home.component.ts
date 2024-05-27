import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { TitleComponent } from '../../components/title/title.component';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, TitleComponent, MainLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
