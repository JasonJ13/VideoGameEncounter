import { Routes } from '@angular/router';
import { AccueilComponent} from '../pages/Accueil/accueil.component'
import { SearchProfilesComponent } from '../pages/Search/Profiles/searchProfiles.component';
import { SearchProjectsComponent } from '../pages/Search/Projects/searchProjects.component';
import { DetailsComponent } from '../pages/Search/Profiles/Detail/detail.component';

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
                {path: 'Profiles', component: SearchProfilesComponent, children:
                    [
                        {path: 'details/:id', component: DetailsComponent, title: 'Profile details'}
                    ]
                },
                {path: 'Projects', component: SearchProjectsComponent},

            ]
        },
        

    ] },
      {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
