import { Component } from '@angular/core';
import {NiceSelectComponent} from "../components/nice-select/nice-select.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
    imports: [
        NiceSelectComponent,
        RouterOutlet
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
