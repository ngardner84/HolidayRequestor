import { Component } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  holidays: any;
  year: string = '2021';
  countryCode: string = 'US';
  displayedColumns: string[] = ['date', 'name', 'countryCode'];


  form: FormGroup = new FormGroup({
    year: new FormControl(this.year),
    countryCode: new FormControl(this.countryCode)
  });
  
  constructor(private dataService: DataService) { }

  getHolidays () {
    this.year = this.form.value.year;
    this.countryCode = this.form.value.countryCode;
    try {
      this.dataService.getHolidays(this.year, this.countryCode).then(data => {
        this.holidays = data;
        console.log(JSON.stringify(this.holidays));
      }).catch(error => {
        this.holidays = null;
        console.error('Error:', error);
      });
    } catch (error) {
      this.holidays = null;
      console.error('Error:', error);
    }
  }


}

