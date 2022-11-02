import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Dummy from '../Pages/Dummy';
import Dummy2 from '../Pages/Dummy2';

import SharedLayout from './SharedLayout';
import ExplorePage from '../Pages/ExplorePage/ExplorePage';
import LandingPage from '../Pages/LandingPage/LandingPage';
import PlanYourTripPage from '../Pages/PlanYourTripPage/PlanYourTripPage';
import DestinationPage from '../Pages/DestinationPage/DestinationPage';
import AccommodationPage from '../Pages/AccommodationsPage/AccommodationPage';
import InstitutionsPage from '../Pages/SidebarPages/InstitutionsPage';
import TenderPage from '../Pages/SidebarPages/TenderPage';
import SpecificDestinationPage from '../Pages/DestinationPage/SpecificDestinationPage';
import Facility from '../components/SideNavbar/Mice/Facility';

const Root = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<LandingPage />} />
					<Route path="home" element={<LandingPage />} />

					<Route path="explore" element={<ExplorePage />} />

					<Route
						path="plan-your-trip"
						element={<PlanYourTripPage />}
					/>
					<Route path="destinations" element={<DestinationPage />} />
					<Route
						path="accommodation"
						element={<AccommodationPage />}
					/>
					<Route path="institutions" element={<InstitutionsPage />} />

					<Route path="tenders" element={<TenderPage />} />

					<Route path="facilities" element={<Facility />} />
					<Route
						path="specific-destination"
						element={<SpecificDestinationPage />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};
export default Root;
