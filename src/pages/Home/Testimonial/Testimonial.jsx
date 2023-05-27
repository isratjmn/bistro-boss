import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	});
	return (
		<section className="my-20">
			<SectionTitle
				heading={"TESTIMONIALS"}
				subHeading="What Our Clients Say"
			></SectionTitle>

			<Swiper
				cssMode={true}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				{reviews.map((review) => (
					<SwiperSlide key={reviews._id}>
						<div className="m-32 flex flex-col items-center w-[75%] md:w-[50%] text-center mx-auto leading-6">;
							<Rating
								style={{ maxWidth: 150 }}
								value={review.rating}
								readOnly
							/>
							<p className="my-3">{review.details}</p>
							<h3 className="text-2xl text-orange-700">
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonial;
