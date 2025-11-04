import { Routes } from '@angular/router';
import { MenuBarComponent } from '../pages/MenuBar/menuBar.component';
import { AccueilComponent} from '../pages/Accueil/accueil.component'

export const routes: Routes = [
    {
    path: '/',
    children: [
      { path: 'Accueil', component: AccueilComponent},
    ] },
];
