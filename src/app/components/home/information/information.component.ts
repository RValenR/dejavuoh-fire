import { Component } from '@angular/core';
import { TopbarComponent } from '../../commons/topbar/topbar.component';
import { TeamBarComponent } from '../../commons/team-bar/team-bar.component';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [TopbarComponent, TeamBarComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  mostrarBotonTeamBar = false;
}
