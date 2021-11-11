import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {

  public events = [];
  constructor() { }

  ngOnInit(): void {
  }

  onNewEventCard(eventCard: any){
    this.events = [...this.events, eventCard];
  }

}
