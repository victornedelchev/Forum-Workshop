import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  isEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: [''],
  });

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      tel,
    };

    this.form.setValue({ username, email, tel });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as ProfileDetails;

    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.toggleEditMode();
    });
  }

  onCancel(event: Event): void {
    event.preventDefault();
    this.toggleEditMode();
  }
}
