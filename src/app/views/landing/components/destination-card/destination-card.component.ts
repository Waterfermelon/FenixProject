import {Component, input, InputSignal} from '@angular/core';
import {DestinationCardDto} from '../../utils/destinationCardDto';

@Component({
  selector: 'app-destination-card',
  imports: [],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {

  public destination: InputSignal<DestinationCardDto> = input.required<DestinationCardDto>();
}
