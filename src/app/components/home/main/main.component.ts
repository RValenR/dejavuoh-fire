import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainService } from '../../../services/main/main.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarComponent } from '../../commons/sidebar/sidebar.component';
import { TopbarComponent } from '../../commons/topbar/topbar.component';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { TeamBarComponent } from '../../commons/team-bar/team-bar.component';
import { ContactBlockComponent } from '../../commons/contact-block/contact-block.component';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonModule, 
    InputTextModule, DialogModule, SidebarComponent, TopbarComponent, TableModule, FontAwesomeModule, RouterModule,
    TeamBarComponent, ContactBlockComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  faEye = faEye;
  faPlus = faPlus;
  faAngleRight = faAngleRight;

  isModalOpen = false;
  visible: boolean = false;
  items: any;
  elementSelected:any = null;

  firebaseService = inject(AuthService);
  router = inject(Router);
  dataService = inject(MainService);

  isSideNavCollapsed = false;
  screenWidth = 0;

  public specialStyleClass = '';
  public topbarStyle = '';
  mostrarBotonTeamBar = true;

  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    this.fetchItems();
    // this.firebaseService.showInfo = true;
    // this.cdr.detectChanges();
    // this.firebaseService.pageStyle = 'body-trimmed-aux'
  }

  async fetchItems() {
    try {
      const jsonItems = await this.dataService.getElements()
      this.items = jsonItems;
      console.log('Datos recibidos:', jsonItems);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  showInPanel(element:any){
    console.log(element);
    this.elementSelected = element;
  }

  addNewData() {
    this.visible = true;
  }

  onIsVisible(data: any){
    this.visible = false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firebaseService.showInfo = true;
      this.firebaseService.pageStyle = 'body-trimmed-aux'
      // this.firebaseService.pageStyle = 'full-screen';
  
      // Ahora forzamos la detección de cambios de forma segura
      this.cdr.detectChanges();
    }, 0);
  }
}
