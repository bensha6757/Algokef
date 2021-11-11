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

  attendingIcon = "thumb_up";
  attendingIconChecked: boolean = false;
  toggle = false;

  numberOfAttendingMembers: number = 0;

  attendingChecked(){
    this.attendingIconChecked = !this.attendingIconChecked;
    if (this.attendingIconChecked){
      this.numberOfAttendingMembers++;
    } else {
      this.numberOfAttendingMembers--;
    }
    this.toggle = !this.toggle;
  }
}
