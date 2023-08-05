import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import MoreProjectsBtn from "../components/projects/MoreProjectsBtn";
import Note from "../components/Home/Note";

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner />
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>
			<MoreProjectsBtn value={'Check all Projects here'}/>
		</div>
	);
};

export default Home;
