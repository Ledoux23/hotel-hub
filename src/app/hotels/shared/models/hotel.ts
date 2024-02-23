export interface IHotel {
  id: number;
  hotelName: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  tags?: string[];
}

/**
 * L'uitilisation de la class est nécessaire si
 * on veut ajouter des méthodes
 */
export class Hotel implements IHotel {
  constructor(
    public id: number,
    public hotelName: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public rating: number,
    public tags: string[]
  ) {}

  getNewPrice(price: number): number {
    return price -5;
  }
}
