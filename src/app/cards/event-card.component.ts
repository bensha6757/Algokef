import {Component, Input} from '@angular/core';
import {Time} from "@angular/common";

/**
 * @title Card with sub-title
 */
@Component({
  selector: 'event-card',
  templateUrl: 'event-card.component.html',
})
export class EventCardComponent {
  @Input() eventName: string = "event example";
  @Input() date: Date = new Date("1/1/2021");
  @Input() time: Time = {hours: 10, minutes: 1};
  @Input() location: string = "PingPong room";

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small`;

}
