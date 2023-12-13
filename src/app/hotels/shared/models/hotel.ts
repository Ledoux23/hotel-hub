export interface IHotel {
  hotelId: number;
  hotelName: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

/**
 * L'uitilisation de la class est nécessaire si
 * on veut ajouter des méthodes
 */
export class Hotel implements IHotel {
  constructor(
    public hotelId: number,
    public hotelName: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public rating: number,
  ) {}

  getNewPrice(price: number): number {
    return price -5;
  }
}
