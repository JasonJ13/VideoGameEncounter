import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TranslateDirective, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Appli';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr' , 'en']);
    this.translate.use('en');
  }

  
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  
  
}
