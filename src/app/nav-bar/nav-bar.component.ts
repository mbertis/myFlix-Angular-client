import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // Logs user out, removes their data from Local Storage, and returns to welcome page
  logoutUser(): void {
    localStorage.clear();
    this.router.navigate(["welcome"]);
    this.snackBar.open("You Are Now Logged Out", "OK", {
      duration: 2000,
    });
  }
}
