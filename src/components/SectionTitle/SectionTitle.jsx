import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
	return (
		<section className="md:w-4/12 mx-auto text-center">
			<p className="text-[#D99904] pt-6 mb-4">---{subHeading}---</p>
			<h2 className="text-[#151515] text-4xl font-bold mb-12 uppercase border-y-4 py-4">{heading}</h2>
		</section>
	);
};

export default SectionTitle;
