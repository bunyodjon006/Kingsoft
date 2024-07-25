
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormmodulComponent } from '../formmodul/formmodul.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(public dialog:MatDialog){}

OpenModul(){
this.dialog.open(FormmodulComponent)
}
}
