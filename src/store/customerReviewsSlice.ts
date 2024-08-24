import { createSlice } from '@reduxjs/toolkit';


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
    { id: 1, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Jerry K", rating: 5, occupation: "Traveler", image: "/assets/customer1.png"},
    { id: 2, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Sammy L", rating: 2.8, occupation: "Software Developer", image: "/assets/customer2.png"},
    { id: 3, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Vin D", rating: 3, occupation: "Business Owner", image: "/assets/customer3.png"},
    { id: 4, comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus est molestias sit amet laboriosam. Eaque perferendis minus culpa aliquid veritatis!", customerName: "Paul W", rating: 4.3, occupation: "Private Investigator", image: "/assets/customer4.png"},
  ],
};

const customerReviewsSlice = createSlice({
  name: 'customerReviews',
  initialState,
  reducers: {},
});

// export const { deleteItem, filterItemsById } = itemsSlice.actions;

export default customerReviewsSlice.reducer;
