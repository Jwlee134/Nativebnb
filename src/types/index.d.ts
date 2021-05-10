export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  superhost: boolean;
}

export interface IRoom {
  id: number;
  is_fav: boolean;
  user: IUser;
  photos: string[];
  created: string;
  name: string;
  address: string;
  price: number;
  beds: number;
  lat: string;
  lng: string;
  bedrooms: number;
  bathrooms: number;
  check_in: string;
  check_out: string;
}
