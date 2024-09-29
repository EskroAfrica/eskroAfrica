import React, { useState, useEffect } from 'react';
import { GetProductPayload, Product, ProductStatus, useGetProductsMutation } from '../../store/productApiSlice';
import Button from '../Button';
import Loader from '../Loader';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PAGE_SIZE = 10; // Number of items per page

interface MyComponentProps {
    name: string | undefined;
    categoryId: string | undefined
}

const PaginatedComponent: React.FC<MyComponentProps> = ({ name, categoryId }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    // const [error, setError] = useState<string | null>(null);
    const [getProducts, { isLoading, isSuccess, isError, error }] = useGetProductsMutation()


    const fetchProducts = async (pageNumber: number) => {
        try {
            const payload: GetProductPayload = {
                CategoryId: categoryId,
                PageNumber: pageNumber,
                pageSize: 12
            };
            const response = await getProducts(payload).unwrap()
            console.log(isSuccess)
            const products: Product[] = response?.data || []
            setTotalItems(response?.totalCount)
        } catch (error: any) {
            if (error?.status) {
                console.log(error?.status)
            }
        }
    }

    useEffect(() => {
        fetchProducts(currentPage)
    }, [currentPage]);

    const totalPages = Math.ceil(totalItems / PAGE_SIZE); // Calculate total pages

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className='w-[90%] mx-auto py-5'>
            <div className='flex justify-between items-center border-b border-neutral-300'>
                    <p className='text-2xl text-primary font-semibold border-b-2 border-primary'> {name}</p>
                </div>

            {isLoading && !isError ?

                (<Loader />)

                :

                <div className='pt-4'>
                    <div className="w-[95%] lg:w-[95%] mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map(item => (
                            <div key={item.id} className="bg-baseColor px-5 py-4 mb-4 rounded-xl">
                                <div className=''>
                                    <div className="h-60 w-full overflow-hidden">
                                        <img className="w-full h-full object-cover md:object-contain" src={item.featuredImage} alt="" />
                                    </div>
                                    <p className='text-xl font-medium py-2 whitespace-nowrap'>{item.name}</p>
                                    <p className='text-sm pb-2 text-neutral-500'>{ProductStatus[item.status]}</p>
                                    {/* <StarRating rating={item.rating} /> */}
                                    <p className='font-medium py-2'>{item.state}</p>
                                    <div className='flex justify-between items-end'>
                                        <p className='text-2xl font-medium'>N {item.price.toFixed(2)}</p>
                                        <p className='text-sm text-error200'>{item.status}</p>
                                    </div>
                                </div>
                                <div className='w-[60%] mx-auto py-2 '><Button text='Place Bid' className='w-50 border border-primary px-8 xl:px-12 py-4 rounded-lg text-primary' /></div>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-center gap-x-3 mx-auto w-50 py-5'>
                        <div onClick={handlePreviousPage} className={`bg-baseColor w-7 h-7 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : ''}`}> <FaArrowLeft /> </div>
                        <div> <span className="text-gray-700 font-medium">
                            Page {currentPage} of {totalPages}
                        </span></div>
                        <div onClick={handleNextPage} className={`bg-baseColor w-7 h-7 rounded-2xl border flex justify-center items-center border-neutral-300 cursor-pointer ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : ''}`}> 
                        <FaArrowRight /></div>
                    </div>

                </div>
            }
        </div>
    );
};

export default PaginatedComponent;
