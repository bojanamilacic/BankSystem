import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from '../api/connection-api.service';

@Component({
  selector: 'app-view-client-detail',
  templateUrl: './view-client-detail.component.html',
  styleUrls: ['./view-client-detail.component.css']
})
export class ViewClientDetailComponent implements OnInit {

  constructor(private service: ConnectionApiService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
