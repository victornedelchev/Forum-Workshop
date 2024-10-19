import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  currentTheme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  fetchTheme() {
    const id = this.activatedRoute.snapshot.params['themeId'];
    return this.apiService.getTheme(id).subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  ngOnInit(): void {
    this.fetchTheme();
  }
}
