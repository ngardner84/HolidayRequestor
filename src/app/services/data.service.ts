import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  apiURL = "https://date.nager.at/api/v2/PublicHolidays";

  getHolidays(year: string, countryCode: string) {
    return fetch(this.apiURL+'/'+year+'/'+countryCode)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

}
