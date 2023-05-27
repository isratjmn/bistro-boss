import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
	return (
		<section className="my-20">
			<SectionTitle
				subHeading="From 11:00am to 10:00pm"
				heading="Order Online"
			/>

			<Swiper
				slidesPerView={2}
				spaceBetween={10}
				pagination={{ clickable: true }}
				className="mySwiper mb-20"
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
			>
				<SwiperSlide>
					<img src={slider1} alt="img1" />
					<h3 className="text-4xl uppercase text-white -mt-16 ps-4 md:ps-20">
						Salad
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider2} alt="img2" />
					<h3 className="text-4xl uppercase text-white -mt-16 ps-4 md:ps-20">
						Soups
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider3} alt="img3" />
					<h3 className="text-4xl uppercase text-white -mt-16 ps-4 md:ps-20">
						Pizzas
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider4} alt="img1" />
					<h3 className="text-4xl uppercase text-white -mt-16 ps-4 md:ps-20">
						Desserts
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider5} alt="img4" />
					<h3 className="text-4xl uppercase text-white -mt-16 ps-4 md:ps-20">
						Soups
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider3} alt="img5" />
					<h3 className="text-4xl uppercase text-white -mt-16 ps-4 md:ps-20">
						Salad
					</h3>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Category;
