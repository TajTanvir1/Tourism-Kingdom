// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { TiStarFullOutline } from "react-icons/ti";
import { Bounce } from "react-awesome-reveal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../shared/quotes.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Quotes = () => {
    return (
        <div className='w-[90%] h-full grid md:grid-cols-2 justify-around mx-auto my-6 md:my-10'>
            <div className='w-[80%] mx-auto my-4'>
                <Bounce duration='3000'>
                <h1 className='title-text pb-6 underline'>Travel Quotes</h1>
                </Bounce>
                <h1 className='sub-text'>These inspirational travel quotes will remind you of the transformational experience traveling can be.</h1>
            </div>
            <div className='w-[300px] md:w-[500px] h-[400px] mx-auto'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“Life is either a daring adventure or nothing at all.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― Helen Keller</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“Travel far enough, you meet yourself.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― David Mitchell</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“Wherever you go becomes a part of you somehow.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― Anita Desai</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“Once a year, go someplace you've never been before.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― Dalai Lama</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“The most beautiful thing in the world is, of course, the world itself.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― Wallace Stevens</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“Live life with no excuses, travel with no regret.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― Oscar Wilde</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“If it scares you, it may be a good thing to try.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>— Seth Godin</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'> “Travel makes one modest. You see what a tiny place you occupy in the world.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― Gustav Flaubert</p>
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className='flex flex-col w-[85%] font-kanit'>
                            <h1 className='flex text-center mx-auto gap-2 my-2'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></h1>
                            <h1 className='dark-text'>“Not all those who wander are lost.”</h1>
                            <p className='text-end my-2 text-green-700 text-lg font-medium'>― J.R.R. Tolkien</p>
                        </span>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Quotes;