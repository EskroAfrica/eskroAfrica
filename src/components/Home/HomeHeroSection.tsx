import Button from '../Button'
import Homeslider from '../HomeSlider/Homeslider'

const HomeHeroSection = () => {
    return (
        <div className='bg-neutral-100'>
            <div className='relative sf-font '>
                <div className='flex justify-between w-[95%] mx-auto'>
                    <div className='w-[40%] py-40'>
                        <h1 className='font-bold text-2xl md:text-3xl lg:text-6xl leading-tight lora-700 '>
                            Buying Affordable Items Just Got Better
                        </h1>
                        <p className='w-[70%] text-xl text-neutral-400 pt-28 pb-8'>
                            Let Eskro Africa be your bridge between affordable and safe items
                        </p>
                        <Button text='Shop Now'  className='w-44 bg-secondary py-4 rounded-md text-black'/>
                    </div>
                    <div className='w-[60%] relative'>
                        <div><img className='z-50' src="/assets/EskroImage1.png" alt="" /></div>
                        <img className='w-[30%] h-[30%] absolute right-[10%] top-10 z-0' src="/assets/Ellipse920.png" alt="" />
                    </div>
                </div>
                <div>
                    <div className='absolute bottom-[25%] w-full px-10 bg-secondary z-20' style={{ transform: 'skewY(6deg)' }}>
                        <Homeslider text='Shop By December 16 To Ensure Delivery Before Xmas Shop By December 16 To Ensure Delivery Before Xmas' />
                    </div>
                    <div className='absolute bottom-[25%] w-full px-10 bg-primary z-20' style={{ transform: 'skewY(-6deg)' }}>
                        <Homeslider text='Shop By December 16 To Ensure Delivery Before Xmas Shop By December 16 To Ensure Delivery Before Xmas' />
                    </div>
                </div>
                <div className='absolute bottom-[1%] left-1/2 transform -translate-x-1/2 w-[70%] bg-white/70 backdrop-blur-sm px-16 py-20 z-50 rounded-xl'>
                    <img src="/assets/logos.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default HomeHeroSection



// <div className='relative' >
//     <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 '>
//         <h1 className='font-bold text-6xl leading-tight  lora-700  w-[40%]'>
//             Buying Affordable Items Just Got Better
//         </h1>
//     </div>

//     <div className='flex justify-end w-full h-[800px] z-10'>
//         <img className=' h-[1000px] object-contain pe-60' src="/assets/EskroImage1.png" alt="" />
//     </div>

//     <div className='flex justify-center z-0'>
//         <img className='w-64 h-64 absolute bottom-80 right-72' src="/assets/Ellipse920.png" alt="" />
//     </div>

//     <div className='absolute w-full px-10 bg-secondary z-20' style={{ transform: 'skewY(6deg)' }}>
//         <Homeslider text='Shop By December 16 To Ensure Delivery Before Xmas Shop By December 16 To Ensure Delivery Before Xmas' />
//     </div>

//     <div className='absolute w-full px-10 bg-primary z-20' style={{ transform: 'skewY(-6deg)' }}>
//         <Homeslider text='Shop By December 16 To Ensure Delivery Before Xmas Shop By December 16 To Ensure Delivery Before Xmas' />
//     </div>

// </div>