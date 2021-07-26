import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RestroAddComponent } from '../restro-add/restro-add.component';
import { RestroUpdateComponent } from '../restro-update/restro-update.component';

@Component({
  selector: 'app-restro-list',
  templateUrl: './restro-list.component.html',
  styleUrls: ['./restro-list.component.scss']
})
export class RestroListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'Address', 'Mobile', 'email', 'icon'];

  dataSource:any;
  constructor(
    private _api: ApiService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this._api.refreshList$.subscribe(() =>{      
      this.getRestroList();
    })
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

    // dialogRef.afterClosed().subscribe(result => {
    //   this.getRestroList();
    // });
  }

  deleteRestro(index:any){
    this._api.deleteRestro(index).subscribe((res) => {
      this.dataSource.splice(index, 1);
    })
    
  }
  
  updateRestro(data:any){
    const dialogRef = this.dialog.open(RestroUpdateComponent, {
      width: '600px',
      data: {
      data: data,
      }
    });    
  }

}
