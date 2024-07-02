import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../shared/styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
   return (
      <>
         <div className='lg:h-[550px]'>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper"
            >
               <div className=''>
                  <SwiperSlide className=''>
                     <img src='https://i.ibb.co/rMd3PRw/A10-Banner1.png' alt="" className='' />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                     <img src='https://i.ibb.co/4drcf4f/A10-Banner2.png' alt="" className='' />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                     <img src='https://i.ibb.co/QXBvVfS/A10-Banner4.png' alt="" className='' />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                     <img src='https://i.ibb.co/BfwKPyn/A10-Banner3.png' alt="" className='' />
                  </SwiperSlide>
               </div>
            </Swiper>
         </div>
      </>
   );
}
