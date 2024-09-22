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