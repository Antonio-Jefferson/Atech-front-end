import { Component } from '@angular/core';
import { Person } from '../../model/person.model';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MainLayoutComponent, TitleComponent, MatIconModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.sass'
})
export class UserDetailsComponent {
  userId: number | undefined;
  user: Person | undefined;

  constructor(private route: ActivatedRoute, private localStorageApiService: LocalstorageApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.getUserDetails(this.userId);
    });
  }

  getUserDetails(id: number): void {
    this.localStorageApiService.getPersonById(id).subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        console.log('User not found');
      }
    });
  }
}
