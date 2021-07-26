import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-restro-update',
  templateUrl: './restro-update.component.html',
  styleUrls: ['./restro-update.component.scss']
})
export class RestroUpdateComponent implements OnInit {
  form: FormGroup;
  example = { Name: "", Address: "", Mobile: "", email:"" };

  constructor(private _api: ApiService, private builder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: {data: any}) { 
  this.form = builder.group({
    Name: this.data.data.Name,
    Address: this.data.data.Address,
    Mobile: this.data.data.Mobile,
    email: this.data.data.email
  });
   }

  ngOnInit(): void {   
     
  }

  updateRestro(){
    this._api.updateRestro(this.data.data.id, this.form.value).subscribe((res) =>{
      return res;
    })
  }

}
