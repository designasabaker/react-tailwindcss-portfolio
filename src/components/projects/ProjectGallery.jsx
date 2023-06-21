import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import ClickableImage from "./ClickableImage";

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 overflow-hidden sm:grid-cols-3 sm:gap-10 mt-12 ">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					// <div className="hover-zoom" key={project.id}>
					// 	<img
					// 		src={project.img}
					// 		className="max-h-screen max-w-screen-md object-fill rounded-xl shadow-lg sm:shadow-none hover:scale-125"
					// 		alt={project.title}
					// 	/>
					// </div>
					<ClickableImage key={project.id} id={project.id} src={project.img} alt={project.title} />
				);
			})}
		</div>
	);
}

export default ProjectGallery;
