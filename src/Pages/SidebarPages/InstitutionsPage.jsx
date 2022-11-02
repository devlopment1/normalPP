import React from 'react';
import institutionsImg from '../../assets/images/institutions.png';
import InstitutionsCard from '../../components/InstitutionsCard';

const InstitutionsPage = () => {
	return (
		<>
			<div className="w-screen aspect-auto relative">
				<img
					className="w-full h-full  contrast-200 "
					src={institutionsImg}
				/>
				<div className="absolute z-10 institutions-transbox w-full h-full top-0 left-0"></div>
			</div>
			<div className="my-8 ml-16">
				<span className="text-8xl text-red youth-brush-light">
					Institutions
				</span>
			</div>
			{/* className="xl:container grid grid-cols-2 md:gap-8 xl:gap-16  mb-16 mx-auto" */}
			<div className="flex flex-row flex-grow flex-wrap justify-center gap-8 mb-8 mx-4 md:mx-0">
				<InstitutionsCard />
				<InstitutionsCard />
				<InstitutionsCard />
				<InstitutionsCard />
			</div>
		</>
	);
};

export default InstitutionsPage;
