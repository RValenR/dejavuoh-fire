import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './team-bar.component.html',
  styleUrl: './team-bar.component.css'
})
export class TeamBarComponent {
  @Input() showButton: boolean = false;
}
