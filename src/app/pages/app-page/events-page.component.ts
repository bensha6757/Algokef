import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  public events = [];
  constructor() { }

  ngOnInit(): void {
  }

  onNewEventCard(eventCard: any){
    this.events = [...this.events, eventCard];
  }

}
