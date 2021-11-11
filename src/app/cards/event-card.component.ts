import {Component, Input} from '@angular/core';
import {Time} from "@angular/common";

/**
 * @title Card with sub-title
 */
@Component({
  selector: 'event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() eventName: string = "event example";
  @Input() date: Date = new Date("1/1/2021");
  @Input() time: string = "10:00";
  @Input() location: string = "PingPong room";

  attendingIcon = "thumb_up";
  attendingIconChecked: boolean = false;

  numberOfAttendingMembers: number = 0;

  attendingChecked(){
    this.attendingIconChecked = !this.attendingIconChecked;
    if (this.attendingIconChecked){
      this.attendingIcon = "thumb_up";
      this.numberOfAttendingMembers++;
    } else {
      this.attendingIcon = "thumb_up";
      this.numberOfAttendingMembers--;
    }

  }
}
