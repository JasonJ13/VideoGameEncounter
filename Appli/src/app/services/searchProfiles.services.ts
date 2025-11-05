import { Injectable } from '@angular/core';
import {ProfileInterface} from './../shared/ProfilesInterface';

@Injectable({
  providedIn: 'root'
})
export class SearchProfilesService {
    url = 'http://localhost:3000/locations';

  async getAllHousingLocation(): Promise<ProfileInterface[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<ProfileInterface | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson=await data.json();
    return locationJson[0] ?? [];
  }
  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}