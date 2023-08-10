import React from 'react';
import {Data} from "./Data"
//Swiper
import {Pagination} from "./Swiper";
import {Swiper, SwiperSlide} from "./swiper/react";
import "swiper/swiper-bundle.min.css";

function Testmonials() {
    return ( 
        <section className='container'>
            <h2>Testmonials</h2>

            <Swiper 
            loop={true} 
            grabCursor={true}
            pagination={{ clickable: true}}
            breakpoints={{576:{slidesPerView:2}, 
            768:{ slidesPerView:3}}}
            spaceBetween={24}
            modules={[Pagination]}
            ></Swiper>
            
            {Data.map(({id,title, description}) => {
                return(
                    <SwiperSlide key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </SwiperSlide>
                )
            })}
        </section>
     );
}

export default Testmonials;