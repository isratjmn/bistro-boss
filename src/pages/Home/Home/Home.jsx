import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featureed from "../Featured/Featureed";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro | Home</title>
			</Helmet>
			<Banner />
			<Category />
			<PopularMenu />
			<Featureed />
			<Testimonial />
		</div>
	);
};

export default Home;
