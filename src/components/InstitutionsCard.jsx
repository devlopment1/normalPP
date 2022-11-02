import React from 'react';

const InstitutionsCard = () => {
	return (
		<div className="">
			<div className="bg-red w-full text-center py-2">
				<span className="text-white mont-medium text-xl">
					MPIHTTS
				</span>
			</div>
			<div className="flex flex-col items-center justify-center mont-medium gap-y-2 py-4 px-8 shadow ">
				<p className="">
					Madhya Pradesh Institute of Hospitality, Travel & Tourism
					Studies, Bhopal
				</p>
				<p className="">
					M. P. Institute of Hospitality, Travel & Tourism Studies
				</p>

				<p className="">
					Paryatan Bhawan, Bhadbhada Road, Bhopal - 462003
				</p>
				<p className="">
					TEL: <span className="text-red">0755-4027198/ 199</span>
				</p>
				<p className="">
					Website:{' '}
					<span className="text-red">
						http:/www.mpihttsbpl.mp.govin/
					</span>
				</p>
			</div>
		</div>
	);
};

export default InstitutionsCard;
