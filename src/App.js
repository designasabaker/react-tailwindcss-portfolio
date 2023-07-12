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

import Test from './pages/Test';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(()=>import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const Error = lazy(() => import('./pages/Error.jsx'));

function App() {
	useEffect(() => {
		const recordVisit = async () => {
			const timestamp = new Date().getTime();
			try {
				await addDoc(collection(db, "visits"), {
					timestamp: timestamp,
				});
				console.log("Visit recorded");
			} catch (e) {
				console.error("Error recording visit: ", e);
			}
		};

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
