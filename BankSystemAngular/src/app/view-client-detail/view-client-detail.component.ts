import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from '../api/connection-api.service';
import { Router } from '@angular/router';
import { LogInAuthenticationService } from '../api/log-in-authentication.service';
import { AddClientDetailComponent } from '../add-client-detail/add-client-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-client-detail',
  templateUrl: './view-client-detail.component.html',
  styleUrls: ['./view-client-detail.component.css']
})
export class ViewClientDetailComponent implements OnInit {
  userDetails;
  constructor(public service: ConnectionApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.refreshList();
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
  addNewClientDialog(): void {
    const dialogRef = this.dialog.open(AddClientDetailComponent, {
      width: '800px'
    });
  }
}
