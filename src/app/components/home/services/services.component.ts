import { Component } from '@angular/core';
import { TopbarComponent } from '../../commons/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../commons/footer/footer.component';
import { ContactBlockComponent } from '../../commons/contact-block/contact-block.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopbarComponent, CommonModule, ContactBlockComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  showMarketing: boolean = true;
  showDesarrolloWeb: boolean = false;
  isActiveDM:boolean = true;
  isActiveWeb:boolean=false;
  costumHeight = "200px"
  flag: boolean | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.flag = navigation?.extras?.state?.['flag'];
    if(this.flag){
      this.mostrarDesarrolloWeb()
    }else{
      this.mostrarDigitalMarketing()
    }
  }
  
  mostrarDigitalMarketing(){
    this.showMarketing = true;
    this.showDesarrolloWeb = false;
    this.isActiveDM = true;
    this.isActiveWeb = false;
  }

  mostrarDesarrolloWeb(){
    this.showDesarrolloWeb = true;
    this.showMarketing = false;
    this.isActiveDM = false;
    this.isActiveWeb = true;
  }
}
