import { cities } from '../const/const';

export type CityName = typeof cities[number];

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type City = {
    name: CityName;
    location: Location;
}

export type Offer = {
    id: number;
    price: number;
    rating: number;
    title: string;
    isPremium: boolean;
    isFavorite: boolean;
    previewImage: string;
    type: 'apartment' | 'room' | 'house' | 'hotel';
    city: City;
    location: Location;
}
