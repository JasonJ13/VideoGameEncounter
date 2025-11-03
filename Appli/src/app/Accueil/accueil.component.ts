import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslateDirective, TranslatePipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AppComponent {
  title = 'Appli';
}
