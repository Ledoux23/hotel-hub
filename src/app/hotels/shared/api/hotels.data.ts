import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IHotel } from '../models/hotel';

export class HotelData implements InMemoryDbService {

  createDb(): Record<string, IHotel[]> {
    const hotels: IHotel[] = [
      {
        id: 1,
        hotelName: "Cassy sweet live",
        description: "Belle vue sur la mer avec ses requins bleus !",
        price: 330.5,
        imageUrl: "assets/img/hotel-room.jpg",
        rating: 3.5
      },
      {
        id: 2,
        hotelName: "Baméka new look",
        description: "Chambres et suites haut standing. Lieu indiqué pour un weekend paisible.",
        price: 230.5,
        imageUrl: "assets/img/hotel-new-room.jpg",
        rating: 4.5
      },
      {
        id: 3,
        hotelName: "Mirande la belle",
        description: "Séjourner dans un cadre paisible et agréable, adapté à vos besoins !",
        price: 425,
        imageUrl: "assets/img/hotel-room.jpg",
        rating: 3
      },
      {
        id: 4,
        hotelName: "Marina hotel",
        description: "Belle vue sur la mer !",
        price: 500,
        imageUrl: "assets/img/hotel-new-room.jpg",
        rating: 3.75
      },
      {
        id: 5,
        hotelName: "Bamessing palace",
        description: "Belle vue sur la mer !",
        price: 230.5,
        imageUrl: "assets/img/hotel-room.jpg",
        rating: 2.5
      },
      {
        id: 6,
        hotelName: "Tourism place",
        description: "Belle vue sur la mer !",
        price: 350.5,
        imageUrl: "assets/img/hotel-new-room.jpg",
        rating: 3.5
      }
    ];

    return { hotels };
  }

}
