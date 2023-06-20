import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = import('./pages/Projects');
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
// https://dev.to/janjibdev/problem-with-react-router-app-and-github-pages-lij

function App() {
	return (
		<>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<BrowserRouter>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/">
								<Route exact index element={<Home />} />
								<Route path="projects">
									<Route exact index element={<Projects />} />
									<Route
										path=":projectName"
										element={<ProjectSingle />}
									/>
								</Route>
								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
							</Route>

						</Routes>
					</Suspense>
					<AppFooter />
				</BrowserRouter>
				<UseScrollToTop />
			</div>
		</>
	);
}

export default App;
