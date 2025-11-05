import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfileComponent } from './searchProfile/searchProfile.component';
import { ProfileInterface } from '../../../shared/ProfilesInterface';
import { SearchProfilesService } from '../../../services/searchProfiles.services';

@Component({
  selector: 'app-searchProfiles',
  imports: [CommonModule , SearchProfileComponent],
  templateUrl: './searchProfiles.component.html',
  styleUrls: ['./searchProfiles.component.css'],
})
export class SearchProfilesComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  ProfileInterfaceList: ProfileInterface[] = [];
  searchProfileService: SearchProfilesService = inject(SearchProfilesService);
  filteredProfileList: ProfileInterface[] = [];
  constructor() {
    this.searchProfileService.getAllHousingLocation().then((ProfileInterfaceList: ProfileInterface[]) => {
      this.ProfileInterfaceList = ProfileInterfaceList;
      this.filteredProfileList = ProfileInterfaceList;
    })
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredProfileList = this.ProfileInterfaceList;
      return;
    }
    this.filteredProfileList = this.ProfileInterfaceList.filter((ProfileInterface) =>
      ProfileInterface?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}