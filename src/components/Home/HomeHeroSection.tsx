import Homeslider from '../HomeSlider/Homeslider'

const HomeHeroSection = () => {
    return (
        <div className='relative' >
            <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 '>
                <h1 className='font-bold text-7xl leading-tight ps-20'>
                    Buying <br />
                    Affordable Items <br />
                    Just Got Better
                </h1>
            </div>

            <div className='flex justify-end w-full h-[800px] z-10'>
                <img className=' h-[1000px] object-contain pe-60' src="/assets/EskroImage1.png" alt="" />
            </div>

            <div className='flex justify-center z-0'>
                <img className='w-64 h-64 absolute bottom-80 right-72' src="/assets/Ellipse920.png" alt="" />
            </div>

            <div className='absolute w-full px-10 bg-yellow-600 z-20' style={{ transform: 'skewY(6deg)' }}>
                <Homeslider text='Shop By December 16 To Ensure Delivery Before Xmas Shop By December 16 To Ensure Delivery Before Xmas' />
            </div>

            <div className='absolute w-full px-10 bg-blue-900 z-20' style={{ transform: 'skewY(-6deg)' }}>
                <Homeslider text='Shop By December 16 To Ensure Delivery Before Xmas Shop By December 16 To Ensure Delivery Before Xmas' />
            </div>

        </div>
    )
}

export default HomeHeroSection