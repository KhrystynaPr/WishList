import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'main-content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule],

})
export class MainComponent {
  title = 'Khrystyna';
}
