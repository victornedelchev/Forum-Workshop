import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  currentTheme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  fetchTheme() {
    const id = this.activatedRoute.snapshot.params['themeId'];
    return this.apiService.getTheme(id).subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  addComment(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const id = this.activatedRoute.snapshot.params['themeId'];
    const { postText } = form.value;

    return this.apiService.createComment(id, postText).subscribe(() => {
      this.router.navigate([`/themes`]);
    });
  }

  ngOnInit(): void {
    this.fetchTheme();
  }
}
