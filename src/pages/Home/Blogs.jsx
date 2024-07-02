// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../shared/blogs.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Bounce } from 'react-awesome-reveal';


const Blogs = () => {
   return (
      <div>
         <div>
            <div className='w-[80%] mx-auto my-4'>
               <Bounce duration='3000'>
                  <h1 className='title-text pb-6 underline'>Short Detail</h1>
               </Bounce>
               <h1 className='sub-text w-1/2'>Here is some details about some Best Spots. Hope You will like this.</h1>
            </div>
         </div>
         <div className='w-[300px] md:w-[400px] h-[400px] mx-auto'>
            <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={'auto'}
               coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
               }}
               pagination={true}
               modules={[EffectCoverflow, Pagination]}
               className="mySwiper"
            >
               <div className=''>
                  <SwiperSlide>
                     <div className="bg-sky-100 bg-[url('https://swiperjs.com/demos/images/nature-1.jpg')] align-middle items-center bg-opacity-5 h-full rounded-lg">
                        <div className='bg-white bg-opacity-70 items-center align-middle h-full'>
                           <div className='w-32 mx-auto py-6'>
                              <img src="https://i.ibb.co/XC9WSWL/Eiffel-Tower-France.png" alt="" className="rounded-xl mx-auto" />
                           </div>
                           <h1 className='text-xl text-green-800  font-kanit font-semibold'>Eiffel Tower</h1>
                           <h1 className='text-base w-[90%] text-center font-medium mx-auto text-green-700 flex mt-2'><span><FaQuoteLeft /></span> Iconic iron lattice tower offering city views, 7 million people visit every year.</h1>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="bg-sky-100 bg-[url('https://swiperjs.com/demos/images/nature-2.jpg')] align-middle items-center bg-opacity-5 h-full rounded-lg">
                        <div className='bg-white bg-opacity-70 items-center align-middle h-full'>
                           <div className='w-32 mx-auto py-6'>
                              <img src="https://i.ibb.co/LQrCx53/Colosseum-Italy.png" alt="" className="rounded-xl mx-auto" />
                           </div>
                           <h1 className='text-xl text-green-800  font-kanit font-semibold'>Colosseum</h1>
                           <h1 className='text-base w-[90%] text-center font-medium mx-auto text-green-700 flex mt-2'><span><FaQuoteLeft /></span> Iconic amphitheater with guided tours, 7.6 million people visit every year.</h1>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="bg-sky-100 bg-[url('https://swiperjs.com/demos/images/nature-3.jpg')] align-middle items-center bg-opacity-5 h-full rounded-lg">
                        <div className='bg-white bg-opacity-70 items-center align-middle h-full'>
                           <div className='w-32 mx-auto py-6'>
                              <img src="https://i.ibb.co/MVrPM3x/Venice-Canals-Italy.png" alt="" className="rounded-xl mx-auto" />
                           </div>
                           <h1 className='text-xl text-green-800  font-kanit font-semibold'>Venice Canals</h1>
                           <h1 className='text-base w-[90%] text-center font-medium mx-auto text-green-700 flex mt-2'><span><FaQuoteLeft /></span> Famous network of scenic waterways, 30 million people visit every year.</h1>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="bg-sky-100 bg-[url('https://swiperjs.com/demos/images/nature-4.jpg')] align-middle items-center bg-opacity-5 h-full rounded-lg">
                        <div className='bg-white bg-opacity-70 items-center align-middle h-full'>
                           <div className='w-32 mx-auto py-6'>
                              <img src="https://i.ibb.co/ZYKxxNT/Sagrada-Familia-Spain.png" alt="" className="rounded-xl mx-auto" />
                           </div>
                           <h1 className='text-xl text-green-800  font-kanit font-semibold'>Sagrada Familia</h1>
                           <h1 className='text-base w-[90%] text-center font-medium mx-auto text-green-700 flex mt-2'><span><FaQuoteLeft /></span> Iconic, unfinished Gaudi cathedral, 4.5 million people visit every year.</h1>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="bg-sky-100 bg-[url('https://swiperjs.com/demos/images/nature-5.jpg')] align-middle items-center bg-opacity-5 h-full rounded-lg">
                        <div className='bg-white bg-opacity-70 items-center align-middle h-full'>
                           <div className='w-32 mx-auto py-6'>
                              <img src="https://i.ibb.co/cxjW7XG/Stonehenge-England.png" alt="" className="rounded-xl mx-auto" />
                           </div>
                           <h1 className='text-xl text-green-800  font-kanit font-semibold'>Stonehenge</h1>
                           <h1 className='text-base w-[90%] text-center font-medium mx-auto text-green-700 flex mt-2'><span><FaQuoteLeft /></span> Ancient stone circle monument, 1.5 million people visit every year.</h1>
                        </div>
                     </div>
                  </SwiperSlide>
               </div>
            </Swiper>
         </div>
      </div>
   );
};

export default Blogs;