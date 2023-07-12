import { AnimatePresence } from 'framer-motion';
import {lazy, Suspense, useEffect} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import AppProvider from "./context/AppContext";
import {AppSharedLayout} from "./pages/AppSharedLayout";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import {debounce, throttle} from "./utils";
import axios from "axios";
import Test from './pages/Test';
// import dotenv from 'dotenv';
// dotenv.config();


const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(()=>import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const Error = lazy(() => import('./pages/Error.jsx'));
const ipGeoApiKey = process.env.REACT_APP_IP_GEO_API_KEY;
const ipGeoToken = process.env.REACT_APP_IP_GEO_TOKEN;

const recordVisit = async () => {
	const formattedTimestamp = new Date().toLocaleString(undefined, {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	});
	try {
		// Retrieve user's IP address using an external API
		const response = await axios.get("https://api.ipify.org?format=json");
		const ipAddress = response.data.ip;
		//const geoUrl = `http://api.ipstack.com/${ipAddress}?access_key=${ipGeoApiKey}`;
		//const geoResponse = await axios.get(geoUrl);
		// const location = {
		// 	city: geoResponse.data?.city || "Unknown",
		// 	country: geoResponse.data?.country_name || "Unknown",
		// 	region: geoResponse.data?.region_name || "Unknown",
		// };
		const geoTokenUrl = `https://ipinfo.io?token=${ipGeoToken}`;
		const geoTokenResponse = await axios.get(geoTokenUrl);
		const location = {
			country: geoTokenResponse.data?.country || "Unknown country",
			city: geoTokenResponse.data?.city || "Unknown city",
			region: geoTokenResponse.data?.region || "Unknown region",
		}
		await addDoc(collection(db, "visits"), {
			formattedTimestamp,
			ipAddress,
			location,
		});
		console.log("Visit recorded", formattedTimestamp, ipAddress,location);
	} catch (e) {
		console.error("Error recording visit: ", e);
	}
};

function App() {
	useEffect(() => {
		// debounce(recordVisit, 1000);
		// throttle(recordVisit,60);
		recordVisit();
	}, []);

	return (
		<>
			<AppProvider>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<BrowserRouter>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<AppSharedLayout />}>
								<Route exact index element={<Home />} />
								<Route path="projects">
									<Route exact index element={<Projects />} />
									<Route
										path=":projectName"
										element={<ProjectSingle />}
									/>
									<Route path="*" element={<Error />} />
								</Route>
								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
								<Route path="test" element={<Test />} />
								<Route path="*" element={<Error />} />
							</Route>
						</Routes>
					</Suspense>
					<AppFooter />
				</BrowserRouter>
				<UseScrollToTop />
			</div>
			</AppProvider>
		</>
	);
}

export default App;
