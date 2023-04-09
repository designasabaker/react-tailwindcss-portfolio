import { useState, createContext } from 'react';
import { WeLightProjectData as WeLightProjectDataJson} from '../data/WeLightProjectData';
import { OSBProjectData as OSBProjectDataJson} from '../data/OSBProjectData';
import { EcoHomeProjectData as EcoHomeProjectDataJson} from "../data/EcoHomeProjectData";

const SingleProjectContext = createContext();
const projectDataList = [
	WeLightProjectDataJson,
	OSBProjectDataJson,
	EcoHomeProjectDataJson
];

export const SingleProjectProvider = ({ projectName, children }) => {
	const singleIndex = projectDataList.findIndex((projectData) => projectData.name === projectName);
	console.log("singleIndex", singleIndex);
	const [singleProjectData, setSingleProjectData] = useState(
		projectDataList[singleIndex]
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
