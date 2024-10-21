import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addTheme(event: Event, themeName: string, postText: string): void {
    event.preventDefault();
    console.log(themeName, postText);
    
    this.apiService.createTheme(themeName, postText).pipe(
      tap((data) => {
        console.log({ data });
      })
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
