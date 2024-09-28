import { apiSlice } from "./apiSlice";

export interface GetProductPayload {
    SearchTerm?: string | null, 
    SellerId?: string | null, 
    CategoryId?: string | null, 
    SubCategoryId? : string | null, 
    State?: string | null, 
    City?: string | null, 
    PageNumber: number | 0 , 
    pageSize: number | 10
}

interface SubCategory {
    id: string;
    name: string;
}

export interface Category {
    id: string;
    name: string;
    subCategories: SubCategory[];  // Array of SubCategory
}

export enum ProductStatus {
    Available = 0,
    Unavailable = 1, 
    SoldOut = 2
  }
  
  export interface Product {
    id: string;
    createdDate: string;
    name: string;
    description: string;
    additionalInformation: string;
    price: number;
    condition: number;
    state: string;
    city: string;
    status: number;
    categoryId: string;
    subCategoryId: string;
    featuredImage: string;
    quantity: number;
    images: string[];
  }




export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: (params: GetProductPayload) => {
                const queryParams = new URLSearchParams(
                    Object.entries(params).map(([key, value]) => [key, value?.toString() || ''])
                ).toString();
        
                return {
                    url: `/marketplace/products?${queryParams}`,
                    method: 'GET',
                    // credentials: 'include',
                };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    // const {data} = await queryFulfilled;
                } catch (error) {
                    console.log(error);
                }
            }
        }),

        getCategories: builder.mutation({
            query: () => {
                return {
                    url: `/marketplace/categories`,
                    method: 'GET',
                    // credentials: 'include',
                };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    // const {data} = await queryFulfilled;
                } catch (error) {
                    console.log(error);
                }
            }
        })


    })
})

export const {
    useGetProductsMutation, 
    useGetCategoriesMutation
} = productApiSlice