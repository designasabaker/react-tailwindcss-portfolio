import { useState, createContext } from 'react';
import { WeLightProjectData as WeLightProjectDataJson} from '../data/WeLightProjectData';
import { OSBProjectData as OSBProjectDataJson} from '../data/OSBProjectData';
import { EcoHomeProjectData as EcoHomeProjectDataJson} from "../data/EcoHomeProjectData";

const SingleProjectContext = createContext();
export const projectsDataList = [
	WeLightProjectDataJson,
	OSBProjectDataJson,
	EcoHomeProjectDataJson
];

export const SingleProjectProvider = ({ projectName, children }) => {
	const singleIndex = projectsDataList.findIndex((projectData) => projectData.name === projectName);
	console.log("singleIndex", singleIndex);
	const [singleProjectData, setSingleProjectData] = useState(
		projectsDataList[singleIndex]
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, projectsDataList }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
