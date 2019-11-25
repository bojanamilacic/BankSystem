import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionApiService } from '../api/connection-api.service';

@Component({
  selector: 'app-add-client-detail',
  templateUrl: './add-client-detail.component.html',
  styleUrls: ['./add-client-detail.component.css']
})
export class AddClientDetailComponent implements OnInit {
  addClientForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, public service: ConnectionApiService) { }

  ngOnInit() {
    this.addClientForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
   });
  }
  onSubmit(){
    this.submitted = true;
    if (this.addClientForm.invalid) {
      return;
  }
    this.service.postClientDetail(this.addClientForm.value).subscribe(
      res => {
        alert('Successfully');
      },
      err => {
        alert('Error');
      }
    );
  }

}
