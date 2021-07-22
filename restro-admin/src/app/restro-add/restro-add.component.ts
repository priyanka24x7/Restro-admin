import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api/api.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-restro-add',
  templateUrl: './restro-add.component.html',
  styleUrls: ['./restro-add.component.scss']
})
export class RestroAddComponent implements OnInit {

  restroForm = new FormGroup({
    Name: new FormControl(''),
    Address: new FormControl(''),
    Mobile: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
  }

  addRestro(){
    this._api.addRestro(this.restroForm.value).subscribe((res) => {
      return res;
    })
  }

}
