import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { SearchProfilesService } from '../../../../services/searchProfiles.services';
import { ProfileInterface } from '../../../../shared/ProfilesInterface';
import { FormControl , FormGroup , ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  searchProfileService = inject(SearchProfilesService);
  ProfileInterface: ProfileInterface | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.searchProfileService.getHousingLocationById(housingLocationId).then((ProfileInterface) => {
      this.ProfileInterface = ProfileInterface;
    });
  }
  submitApplication() { 
    this.searchProfileService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}