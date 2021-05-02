import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateUserService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public snackBar: MatSnackBar,
    public fetchApiData: UpdateUserService,
    public dialogRef: MatDialogRef<UpdateProfileComponent>
  ) {}

  ngOnInit(): void {}

  /**
   * Sends updated user info to database and refreshes page
   */
  updateUser(): void {
    this.fetchApiData.updateUser(this.userData).subscribe(
      (response) => {
        this.dialogRef.close(); //closes modal on success
        localStorage.setItem('user', response.Username);
        this.snackBar.open('Profile Updated Successfully!', 'OK', {
          duration: 2000,
        });
      },
      (response) => {
        console.log(response);
        this.snackBar.open(response, 'OK', {
          duration: 2000,
        });
      }
    );
    setTimeout(function () {
      window.location.reload();
    }, 1250);
  }
}
