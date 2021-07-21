import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RestroAddComponent } from '../restro-add/restro-add.component';


@Component({
  selector: 'app-restro-list',
  templateUrl: './restro-list.component.html',
  styleUrls: ['./restro-list.component.scss']
})
export class RestroListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'Address', 'Mobile', 'email', 'icon'];
  @Input() dataSource:any;
  
  constructor(
    private _api: ApiService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getRestroList();
  }


  getRestroList(){
    this._api.getRestro().subscribe((res) => {
      this.dataSource = res;      
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RestroAddComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRestroList();
    });
  }

}
