import React from 'react';
import ImageCarousel from '../../components/ImageCarousel';
import NestedCarousel from '../../components/NestedCarousel/NestedCarousel';
import ArticleSectionPage from './ArticlePages/ArticleSectionPage';
import Discover from './ArticlePages/Discover';
import UnExplore from './ArticlePages/UnExplore';

import BannerPage from './BannerPage';

const LandingPage = () => {
	return (
		<div className="">
			<BannerPage />
			<div>
				<ArticleSectionPage />
			</div>
			<div className="mt-[80px]">
				<Discover />
			</div>
			<div>
				<UnExplore />
			</div>
			<div>
				<NestedCarousel />
			</div>
			<div className="px-16 bg-cream mt-[100px] h-[80vh]">
				<div className="pt-10">
					<h1 className="text-red youth-brush-light md:text-6xl sm:text-sm m-10 px-10">
						Popular Places
					</h1>
				</div>

				<div>
					<ImageCarousel className="" />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
