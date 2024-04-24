import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '/public/css/slider.css'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import img from '/Images/logo.webp'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import 'swiper/css/free-mode'

const Slider = ({recomendacionesTest}) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={50}
    freeMode={true}
    autoplay={{
        delay: 5500,
        pauseOnMouseEnter: true
      }}
    pagination={{
        clickable: true
    }}
    modules={[FreeMode,Pagination,Autoplay]}
    className='swiper'
    >
        {
            recomendacionesTest.map((item,index)=>{
                return(
                    <SwiperSlide key={index}  >
                        <div className='container-content'>
                            Hola
                            <h1 >{item.question}</h1>
                            {/* {
                                item.answer.map((item,index)=>{
                                    return(
                                        <label >
                                            <input type='radio' value={item} onChange={()=>handleChangeOption(item,index)}/>
                                            {item}
                                        </label>
                                    )
                                })
                            } */}
                            <img src={img} alt="" />
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default Slider