import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'nice-select',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './nice-select.component.html',
  styleUrl: './nice-select.component.css'
})
export class NiceSelectComponent {

  public options: InputSignal<string[]> = input.required<string[]>();

  public selectedOption: Signal<string> = computed(() => this.options()[0]);
  public selectingOption: boolean = false;


  onClickSelectLang() {
    this.selectingOption = !this.selectingOption;
  }

  onOptionClick(lang: string) {
    this.selectedOption = computed(() => lang);
    this.selectingOption = false;
  }
}
