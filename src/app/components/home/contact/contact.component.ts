import { Component } from '@angular/core';
import { TopbarComponent } from '../../commons/topbar/topbar.component';
import { TeamBarComponent } from '../../commons/team-bar/team-bar.component';
import { ContactBlockComponent } from '../../commons/contact-block/contact-block.component';
import { FooterComponent } from '../../commons/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TopbarComponent, TeamBarComponent, ContactBlockComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mostrarBotonTeamBar = true;
}
