import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, private router: Router) {}
  onCreateNewProject() {
    this.router.navigate(['/create-new-project']);
  }

  onTitleClick() {
    this.router.navigate(['/']);
  }
}
