import { Routes } from '@angular/router';
import { AccueilComponent} from '../pages/Accueil/accueil.component'
import { SearchProfilesComponent } from '../pages/Search/Profiles/searchProfiles.component';
import { SearchProjectsComponent } from '../pages/Search/Projects/searchProjects.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/Accueil',
        pathMatch: 'full'
    },
    {
    path: '',
    children: [
        { path: 'Accueil', component: AccueilComponent },
        { path: 'Search', children:
            [
                {path: 'Profiles', component: SearchProfilesComponent},
                {path: 'Projects', component: SearchProjectsComponent}
            ]
        },

    ] },
];
