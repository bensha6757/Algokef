import {Component, Input} from '@angular/core';

/**
 * @title Card with sub-title
 */
@Component({
  selector: 'event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() event;

  attendingIcon = "check_circle_outline";
  attendingIconChecked: boolean = false;

  numberOfAttendingMembers: number = 0;

  attendingChecked(){
    this.attendingIconChecked = !this.attendingIconChecked;
    if (this.attendingIconChecked){
      this.numberOfAttendingMembers++;
      this.attendingIcon = "check_circle";
    } else {
      this.numberOfAttendingMembers--;
      this.attendingIcon = "check_circle_outline";
    }
  }
}
