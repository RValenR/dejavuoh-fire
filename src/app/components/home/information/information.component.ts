import { Component } from '@angular/core';
import { TopbarComponent } from '../../commons/topbar/topbar.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
