import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  public events = [{eventName: 'Coffee', date: new Date('11/11/2021'), time: '10:00', location: 'Kitchen'},
    {eventName: 'Ping Pong', date: new Date('11/11/2021'), time: '15:00', location: 'Pong Room'},
    {eventName: 'Beer After Work', date: new Date('11/11/2021'), time: '21:00', location: `Jem's`}];
  constructor() { }

  ngOnInit(): void {
  }

  onNewEventCard(eventCard: any){
    this.events = [...this.events, eventCard];
  }

}
