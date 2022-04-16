import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'iems-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.scss']
})
export class DatePageComponent implements OnInit {

  constructor() { }
  formDate: FormGroup = new FormGroup({});

  cloneRegisterDate!: Date;

  ngOnInit(): void {
    this.formDate = new FormGroup(
      {
        registerDate: new FormControl(null, [
          Validators.required,
        ]),
        chooseOption: new FormControl('', [
          Validators.required
        ]),
        quantity: new FormControl('', [
          Validators.required
        ]),
      }
    );
  }

  calculeDate() {
    const { chooseOption, quantity, registerDate } = this.formDate.value;

    this.cloneRegisterDate = new Date(registerDate);

        switch(chooseOption) {
            case 'day':
               this.cloneRegisterDate.setDate( this.cloneRegisterDate.getDate() + quantity) ;
            break;
            case 'month':
              this.cloneRegisterDate.setMonth(this.cloneRegisterDate.getMonth() + quantity);
            break; 
            case 'year':
              this.cloneRegisterDate.setFullYear(this.cloneRegisterDate.getFullYear() + quantity)
            break;
        }
  }


}
