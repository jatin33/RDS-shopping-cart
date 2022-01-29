// {
//     "id": 6,
//     "title": "Solid Gold Petite Micropave ",
//     "price": 168,
//     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 70
//     }
// }

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  nativeCount: number;
}

export type Operation = 'increment' | 'decrement';

export type RootStackParamList = {
  Home: undefined;
  Summary: undefined;
};
