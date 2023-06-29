import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import category_1 from "../../assets/img/categories/cat-1.jpg";
import category_2 from "../../assets/img/categories/cat-2.jpg";
import category_3 from "../../assets/img/categories/cat-3.jpg";
import category_4 from "../../assets/img/categories/cat-4.jpg";
import category_5 from "../../assets/img/categories/cat-5.jpg";

const Categories = () => {
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div className="categories__slider">
              <div className="col-lg-3">
                <a href="/shop">
                  <img src={category_1} alt="" width="100%" height={250} />
                  <h5 className="paginate_text">
                    <a href="/shop">Fresh Fruit</a>
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="categories__slider">
              <div className="col-lg-3">
                <a href="/shop">
                  <img src={category_2} alt="" width="100%" height={250} />
                  <h5 className="paginate_text">
                    <a href="/shop">Fresh Fruit</a>
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="categories__slider">
              <div className="col-lg-3">
                <a href="/shop">
                  <img src={category_3} alt="" width="100%" height={250} />
                  <h5 className="paginate_text">
                    <a href="/shop">Fresh Fruit</a>
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="categories__slider">
              <div className="col-lg-3">
                <a href="/shop">
                  <img src={category_4} alt="" width="100%" height={250} />
                  <h5 className="paginate_text">
                    <a href="/shop">Fresh Fruit</a>
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="categories__slider">
              <div className="col-lg-3">
                <a href="/shop">
                  <img src={category_5} alt="" width="100%" height={250} />
                  <h5 className="paginate_text">
                    <a href="/shop">Fresh Fruit</a>
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="categories__slider">
              <div className="col-lg-3">
                <a href="/shop">
                  <img src={category_1} alt="" width="100%" height={250} />
                  <h5 className="paginate_text">
                    <a href="/shop">Fresh Fruit</a>
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
