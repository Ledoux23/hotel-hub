import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelListService } from '../shared/services/hotel-list.service';
import { IHotel } from '../shared/models/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelListService,
    private router: Router
  ){ }

  ngOnInit(): void {
    // const id: number = +this.route.snapshot.paramMap.get('id');
    // console.log('id : ', id)
    const paramMap = this.route.snapshot.paramMap;
    const idString: string | null = paramMap.get('id');

    let id: number;

    if (idString !== null) {
        // const id: number = parseInt(idString, 10);
        id = +idString
        console.log('id : ', id);
    } else {
        console.error("L'ID est null.");
        // Possibilité de choisir une autre action appropriée ici,
        // comme rediriger l'utilisateur ou afficher un message d'erreur.
    }

    this.hotelService.getHotels().subscribe((hotels: IHotel[]) => {
      this.hotel = hotels.find(hotel => hotel.hotelId === id)!;
      console.log('hotel : ', this.hotel);
    })
  }

  public backToList(): void {
    this.router.navigate(['/hotels']);
  }

}
