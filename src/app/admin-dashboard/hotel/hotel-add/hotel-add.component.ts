import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.scss']
})
export class HotelAddComponent implements OnInit {
  hotelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    // Handle form submission here, e.g. send data to server
    console.log(this.hotelForm.value);
  }
}
