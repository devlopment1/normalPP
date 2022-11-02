import React from 'react';
import institutionsImg from '../../assets/images/institutions.png';

const TenderPage = () => {
	return (
		<>
			<div className="w-screen aspect-auto relative">
				<img
					className="w-full h-full  contrast-200"
					src={institutionsImg}
				/>
				<div className="absolute z-10 institutions-transbox w-full h-full top-0 left-0 flex felx-col items-end justify-center pb-16">
					<p className="text-8xl youth-brush-light text-white">
						Tender
					</p>
				</div>
				<div className="absolute z-20  w-full h-full top-0 left-0 flex felx-col items-end justify-center pb-16">
					<p className="text-8xl youth-brush-light text-white">
						Tender
					</p>
				</div>
			</div>
			<div className="my-8 flex flex-row justify-between items-center flex-grow mont-medium mx-16">
				<div className="flex flex-row gap-x-24">
					<div className="flex flex-row">
						<div className="bg-trasparent border-[1px]  border-gray-2 border-r-0 text-gray-2 rounded-l-lg py-2 px-3">
							<span className="">Current Tender</span>
						</div>
						<div className="bg-trasparent border-[1px] border-gray-2 text-gray-2 py-2 px-3">
							<span className="">Archive</span>
						</div>
						<div className="bg-trasparent border-[1px] border-gray-2 border-l-0 text-gray-2 rounded-r-lg py-2 px-3">
							<input
								className="bg-transparent border-0 focus:outline-none mont-medium placeholder:text-gray-2 "
								placeholder="Search by Title"
							/>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="bg-trasparent border-[1px]  border-gray-2 border-r-0 text-gray-2 rounded-l-lg py-2 px-3">
							<span className="">Search</span>
						</div>
						<div className="bg-trasparent border-[1px] border-gray-2 text-red py-2 px-3 rounded-r-lg">
							<span className="">Reset</span>
						</div>
					</div>
				</div>

				<button className="bg-trasparent border-[1px] border-red text-red py-2 px-3 rounded-lg">
					APPLY FOR TENDER
				</button>
			</div>
			<table className=" mx-16">
				<thead className="bg-red  ">
					<tr className="grid grid-cols-8 items-center  mont-medium py-2  text-white">
						<th className="col-span-1 px-2  mont-medium">
							Tender No
						</th>
						<th className="col-span-4 px-2 mont-medium">Subject</th>
						<th className="col-span-1 px-2 text-break mont-medium">
							Corrigendum/Clarification/Addendum
						</th>
						<th className="col-span-1 px-2 mont-medium">
							Publication Date
						</th>
						<th className="col-span-1 px-2 mont-medium">
							Submission Date
						</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr className="bg-gray-4 text-black py-4 text-center">
						<span className="py-2">Record not found</span>
					</tr> */}
				</tbody>
			</table>
			<div className="bg-gray-4 text-black py-3 text-xl mx-16 text-center mb-8 mont-medium">
				Record not found
			</div>
		</>
	);
};

export default TenderPage;
