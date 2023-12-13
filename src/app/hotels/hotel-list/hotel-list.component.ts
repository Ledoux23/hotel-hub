import { Component, OnInit } from "@angular/core";
import { IHotel } from "../shared/models/hotel";
import { HotelListService } from "../shared/services/hotel-list.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  public title = 'Liste des hôtels'
  public hotels: IHotel[] = [];
  public showBadge: boolean = false;
  private _hotelFilter = '';
  public filteredHotels: IHotel[] = [];
  public receivedRating: string = '';
  public errorMsg: string = '';

  constructor(private hotelListService: HotelListService) { }

  ngOnInit(): void {
    this.hotelListService.getHotels().subscribe({
      next: hotels => {
        this.hotels = hotels;
        this.filteredHotels = this.hotels;
      },
      error: err => this.errorMsg = err
    });
    this.hotelFilter = '';
  }

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  public receiveRatingClick(message: string): void {
    this.receivedRating = message;
  }

  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLowerCase().indexOf(criteria) !=-1
    );

    return res;
  }
}
