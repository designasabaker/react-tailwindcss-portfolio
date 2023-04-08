import { useState, createContext } from 'react';
import { WeLightProjectData as WeLightProjectDataJson} from '../data/WeLightProjectData';
import { OSBProjectData as OSBProjectDataJson} from '../data/OSBProjectData';

const SingleProjectContext = createContext();
const projectDataList = [WeLightProjectDataJson, OSBProjectDataJson];

export const SingleProjectProvider = ({ projectName, children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		projectDataList[projectDataList.findIndex((projectData) => projectData.name === projectName)]
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
