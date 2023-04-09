// const selectOptions = [
// 	'Web Application',
// 	'XR Application',
// 	'UI/UX Design',
// 	'Graphic Design',
// ];
import {useContext} from "react";
import {ProjectsContext} from "../../context/ProjectsContext";

const ProjectsFilter = ({ setSelectProject }) => {
	const {projectCategories} = useContext(ProjectsContext);

	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{projectCategories.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
