import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuBarComponent } from '../pages/MenuBar/menuBar.component';

import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, TranslateDirective, TranslatePipe, MenuBarComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PressStart';
  isSidebarCollapsed = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr' , 'en']);
    this.translate.use('en');
    library.add(fab as IconPack, 
                far as IconPack, 
                fas as IconPack);
  }

  
  useLanguage(language: string): void {
    this.translate.use(language);
  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  
  
}
