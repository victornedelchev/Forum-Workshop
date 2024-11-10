import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private fb: FormBuilder) {}

  isEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'victoryo',
    email: 'victoryo@gmail.com',
    tel: '898463644',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: [''],
  });

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;

    this.toggleEditMode();
  }

  onCancel(event: Event): void {
    event.preventDefault();
    this.toggleEditMode();
  }
}
