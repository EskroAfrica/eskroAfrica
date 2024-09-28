import { createSlice } from '@reduxjs/toolkit';
import customer1 from '../assets/customer1.png'
import customer2 from '../assets/customer2.png'
import customer3 from '../assets/customer3.png'
import customer4 from '../assets/customer4.png'


interface CustomerReview {
  id: number;
  comment: string;
  customerName: string; 
  rating: number;
  occupation: string; 
  image: string
}

interface ItemsState {
  customerReviews: CustomerReview[];
}

const initialState: ItemsState = {
  customerReviews: [
    { id: 1, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Jerry K", rating: 5, occupation: "Traveler", image: customer1},
    { id: 2, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Sammy L", rating: 2.8, occupation: "Software Developer", image: customer2},
    { id: 3, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Vin D", rating: 3, occupation: "Business Owner", image: customer3},
    { id: 4, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Paul W", rating: 4.3, occupation: "Private Investigator", image: customer4},
  ],
};

const customerReviewsSlice = createSlice({
  name: 'customerReviews',
  initialState,
  reducers: {},
});

// export const { deleteItem, filterItemsById } = itemsSlice.actions;

export default customerReviewsSlice.reducer;
