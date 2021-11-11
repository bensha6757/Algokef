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
  @Input() eventNote;

  attendingIcon = "check_circle_outline";
  attendingIconChecked: boolean = false;

  numberOfAttendingMembers: number = 0;

  ngOnInit(){
    if (this.eventNote.eventName === 'Ping Pong'){
      this.numberOfAttendingMembers += 3;
    }
    if (this.eventNote.eventName === 'Coffee'){
      this.numberOfAttendingMembers += 5;
    }
    if (this.eventNote.eventName === 'Beer After Work'){
      this.numberOfAttendingMembers += 10;
    }
  }

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
