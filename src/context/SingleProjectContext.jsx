import {useState, createContext, useEffect} from 'react';
import { WeLightProjectData as WeLightProjectDataJson} from '../data/WeLightProjectData';
import { OSBProjectData as OSBProjectDataJson} from '../data/OSBProjectData';
import { EcoHomeProjectData as EcoHomeProjectDataJson} from "../data/EcoHomeProjectData";
import { FPShoppingProjectData as FPShoppingProjectDataJson} from "../data/FPShoppingProjectData";
import { SimpleNimProjectData as SimpleNimProjectDataJson} from "../data/SimpleNimProjectData";
import { ShekonProjectData as ShekonProjectDataJson} from "../data/ShekonProjectData";
import { NasaSuitProjectData as NasaSuitProjectDataJson } from "../data/NasaSuitProjectData";
import { GDProjectData as GDProjectDataJson } from "../data/GDProjectData";
import { OceanicProjectData as OceanicProjectDataJson } from "../data/OceanicProjectData";
import { CarpetProjectData as CarpetProjectDataJson } from "../data/CarpetProjectData";
import { ScreenTableProjectData as ScreenTableProjectDataJson} from "../data/ScreenTableProjectData";

import ProjectError from '../components/projects/ProjectError';

// const moduleFiles = require.context('../data', true, /\.js$/);
// const modules = moduleFiles.keys().map(moduleFile => moduleFiles(moduleFile).default);;
// console.log("modules", modules);

const SingleProjectContext = createContext();
export const projectsDataListEN = [
	WeLightProjectDataJson,
	OSBProjectDataJson,
	EcoHomeProjectDataJson,
	FPShoppingProjectDataJson,
	SimpleNimProjectDataJson,
	ShekonProjectDataJson,
	NasaSuitProjectDataJson,
	GDProjectDataJson,
	OceanicProjectDataJson,
	CarpetProjectDataJson,
	ScreenTableProjectDataJson
];

// export const projectsDataList = modules;

export const SingleProjectProvider = ({ projectName, children }) => {
	const singleIndex = projectsDataListEN.findIndex((projectData) => projectData.name === projectName);
	console.log("singleIndex", singleIndex);

	const [singleProjectData, setSingleProjectData] = useState(
		projectsDataListEN[singleIndex]
	);

	useEffect(() => {
		const singleIndex = projectsDataListEN.findIndex((projectData) => projectData.name === projectName);
		setSingleProjectData(projectsDataListEN[singleIndex]);
	}, [projectName]);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, projectsDataListEN }}
		>
			{singleProjectData && children}
			{!singleProjectData && <ProjectError />}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
