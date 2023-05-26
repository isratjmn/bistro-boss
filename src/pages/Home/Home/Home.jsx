import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featureed from "../Featured/Featureed";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<PopularMenu />
			<Featureed />
			<Testimonial />
		</div>
	);
};

export default Home;
