import React from 'react';
import PYT1Tiger from '../../assets/images/PANNA-NATIONAL-PARK-02.png';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import NestedCarousel from '../../components/NestedCarousel/NestedCarousel';
import PlanningPart from './PlanningPart';

const PlanYourTripPage = () => {
	return (
		<>
			<div className="w-screen aspect-auto">
				<img className="w-full h-full" src={PYT1Tiger} />
			</div>
			<PlanningPart />
			<NestedCarousel />
		</>
	);
};

export default PlanYourTripPage;
