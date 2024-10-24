import { Component } from '@angular/core';
import { TopbarComponent } from '../../commons/topbar/topbar.component';
import { TeamBarComponent } from '../../commons/team-bar/team-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TopbarComponent, TeamBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mostrarBotonTeamBar = true;
}
