import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogContentExample } from 'src/app/components/dialog-content-example/dialog-content-example';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(dialogContentExample:DialogContentExample) { }

  ngOnInit(): void {
  }

  openDialog(){
    
  }
}
