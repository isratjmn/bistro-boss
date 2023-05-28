import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from ".././../../assets/home/featured.jpg";
import "./Featureed.css";


const Featureed = () => {
	return (
		<div>
			<SectionTitle
				subHeading={"Check it Out"}
				heading={"FROM OUR MENU"}
			></SectionTitle>
			<section className="bg-gray-500 bg-fixed featured-item text-white">
				<div className="w-full bg-slate-950 py-16 mx-auto flex flex-wrap gap-12 bg-opacity-30 items-center px-12">
					{/* Image Column */}
					<div className="w-full lg:w-[48%]">
						<img
							style={{
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							className="w-full h-auto object-cover rounded-lg"
							src={featureImg}
							alt="Featured"
						/>
					</div>

					{/* Text and Button Column */}
					<div className="w-full lg:w-[48%]">
						<h2 className="text-2xl leading-10 font-bold mb-4">
							March 20, 2023
							<br />
							WHERE CAN I GET SOME?
						</h2>
						<p className="mb-4 text-xl md:w-[80%]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Error voluptate facere, deserunt dolores
							maiores quod nobis quas quasi. Eaque repellat
							recusandae ad laudantium tempore consequatur
							consequuntur omnis ullam maxime tenetur.
						</p>
						<button className="px-6 py-3 rounded-md btn btn-outline border-0
                        border-b-4 mt-4">
							ORDER NOW
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Featureed;
