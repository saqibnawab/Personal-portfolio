import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Review = () => {
  return (
    <>
      <section className='container mx-auto pb-10 pt-20 '>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }} // Ensure this is included
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="review_section bg-white w-full md:w-1/2 flex items-center justify-center h-64 mx-auto">
                <div className="text text-center">
                  <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSa-097WvTkKtGrilIu2xsmHU-pMcXsxbV3g&s" alt="" className='w-[100px] h-[100px] mx-auto' />
                  </div>
                  <div className="name text-[24px]">saqibnawab</div>
                  <div className="des w-4/5 mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, cum tempora doloremque odit cumque assumenda rem commodi ab error? Libero.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Review;
