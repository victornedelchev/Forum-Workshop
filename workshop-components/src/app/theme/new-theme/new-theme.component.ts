import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  addTheme(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;

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
