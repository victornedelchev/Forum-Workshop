import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themeList: Theme[] = [];
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {        
        this.themeList = themes;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((subscriber) => {
      return subscriber === this.userId;
    });

    return !!isSubscribedUser;
  }
}
