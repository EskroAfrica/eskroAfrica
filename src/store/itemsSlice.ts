import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sofa from '../assets/sofa.png'
import washingMachine from '../assets/washingMachine.png'
import ps5 from '../assets/ps5.png'
import car from '../assets/car.png'
import hair from '../assets/hair.png'
import iphone from '../assets/iphone.png'

enum ProductState {
    FairlyUsed = 'Fairly Used',
    BrandNew = 'Brand New',
  }

interface Item {
  id: number;
  productName: string;
  productState: ProductState; 
  rating: number;
  vendor: string; 
  price: number; 
  bid: string; 
  discount: number; 
  image: any
}

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [
    { id: 1, productName: 'Blue Sofa', productState: ProductState.FairlyUsed, rating: 5, vendor: 'Akin Gadgets', price: 95.50, bid: "Bid ends in 3 days", discount: 0, image: sofa },
    { id: 2, productName: '7kg LG Washing Machine', productState: ProductState.FairlyUsed, rating: 5, vendor: 'Akin Gadgets', price: 95.50, bid: "Bid ends in 3 days", discount: 0, image: washingMachine },
    { id: 3, productName: 'Playstation 5', productState: ProductState.BrandNew, rating: 4, vendor: 'Gbemisola Adeyemi', price: 95.50, bid: "Almost sold out", discount: 56, image: ps5},
    { id: 4, productName: 'Clean Toyota Corolla 2006', productState: ProductState.FairlyUsed, rating: 5, vendor: "AB's Declutter", price: 95.50, bid: "Bid ends in 3 days", discount: 0, image: car },
    { id: 5, productName: '"12" Bone Straight Wig', productState: ProductState.BrandNew, rating: 5, vendor: 'Next Appliances', price: 95.50, bid: "Almost sold out", discount: 0, image: hair},
    { id: 6, productName: 'Clean UK used Iphone 12' , productState: ProductState.FairlyUsed, rating: 5, vendor: 'Next Appliances', price: 95.50, bid: "Almost sold out", discount: 0, image: iphone},
  ],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    deleteItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterItemsById(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id === action.payload);
    },
  },
});

export const { deleteItem, filterItemsById } = itemsSlice.actions;

export default itemsSlice.reducer;
