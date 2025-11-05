import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProfileInterface } from '../../../../shared/ProfilesInterface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-profile',
  imports: [CommonModule , RouterModule],
  templateUrl: './searchProfile.component.html',
  styleUrls: ['./searchProfile.component.css'],
})
export class SearchProfileComponent {
  @Input() ProfileInterface!: ProfileInterface;
}