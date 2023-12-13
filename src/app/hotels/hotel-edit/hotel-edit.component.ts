import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelListService } from '../shared/services/hotel-list.service';
import { IHotel } from '../shared/models/hotel';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent {

  public hotelForm!: FormGroup;
  public hotel!: IHotel;
  public pageTitle: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hotelService: HotelListService
  ){}

  ngOnInit(): void{
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      hotelPrice: ['', Validators.required],
      starRating: [''],
      description: ['']
    });

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.getSelectedHotel(id);
    })
  }

  public getSelectedHotel(id: number): void {
    this.hotelService.getHotelById(id).subscribe((hotel: IHotel) => {
      this.displayHotel(hotel);
    })
  }

  public displayHotel(hotel: IHotel): void {

    this.hotel = hotel;

    if(this.hotel.hotelId === 0) {
      this.pageTitle = 'Créer un hôtel';
    } else {
      this.pageTitle = `Modifier l\'hôtel ${this.hotel.hotelName}`;
    }

    this.hotelForm.patchValue({
      hotelName: this.hotel.hotelName,
      hotelPrice: this.hotel.price,
      description: this.hotel.description,
      starRating: this.hotel.rating
    })
  }

  public saveHotel(): void {
    console.log(this.hotelForm.value);
  }

}
