/* eslint-disable @typescript-eslint/no-explicit-any */


export interface navLinkType{
    icon: React.ReactNode,
    path: string,
    element: string
} 

export interface User{
    _id: string; 
    username: string; 
    password: string; 
    role: "SUPER_ADMIN" | "ADMIN" | "USER"; 
    createdAt: string;
    updatedAt: string;
    __v: number;
}
 export interface Language {
    _id: string;
    name: string;
    code: string;
    image: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
  }
  
 export interface Restaurant {
    restaurant: null;
    _id: string;
    name: any;
    description: string;
    image: string;
    user: User;
    languages: Language[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    categories: category[];    
  coverImage:string
  }
  export interface CategoryIMG {
    _id: string;
    description: any;
    image: string;
    createdAt: string;
    updatedAt: string;
  }

  interface Image {
    _id: string;
    description: Record<string, string>; // JSON string formatida, shuning uchun Record ishlatildi
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  export interface category{
      map(arg0: (el: category) => import("react/jsx-runtime").JSX.Element): unknown;
    _id: string;
  name: Record<string, string>; // JSON string formatida, Record ishlatildi
  restaurant: string; // Restaurant ID sifatida string formatida
  image: Image; // Ichki obyekt uchun `Image` interfeysi
  foods: Food[]; // Foods bo'sh massiv, shuning uchun `any[]` qilingan (yoki ma'lum bo'lsa interfeys berilishi mumkin)
  createdAt: string;
  updatedAt: string;
  __v: number;
  }
  export interface Food{
    _id: string;
  name: Record<string, string>; // JSON string formatida
  description: Record<string, string>; // JSON string formatida
  price: number;
  image: string;
  restaurant: Restaurant; // Restaurant obyektiga mos interfeys
  category: category; // Category obyektiga mos interfeys
  createdAt: string;
  updatedAt: string;
  __v: number;
  }