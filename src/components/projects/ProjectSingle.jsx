import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {useState} from "react";
import {CircularProgress} from "@material-ui/core";

const ProjectSingle = (props) => {
	const { title, category, brief, image, name } = props;
	const [isLoading, setIsLoading] = useState(true);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				to={`/projects/${name}`} aria-label={`${name}`}
			>
				<div 
					className="relative shadow-lg h-lg rounded-xl hover:shadow-xl cursor-pointer dark:bg-ternary-dark"
				>
					<div className="hover-zoom">
						{isLoading &&
							<div
								className="w-full h-1/2 object-contain overflow-hidden">
								<CircularProgress/>
							</div>}
						<img
							style={{display: !isLoading ? "block" : "none" ,}}
							src={image}
							className="w-full h-1/2 object-contain overflow-hidden"
							alt="Single Project"
							onLoad={()=> {setIsLoading(false)}}
						/>
					</div>
					<div 
						className="flex-grow px-6 py-4"
					>
						<div 
						className="font-bold mt-2 text-xl py-0 dark:text-ternary-light "
						>
							{title}
						</div>
						<p className="text-gray-700 text-sm dark:text-ternary-light">
							{brief}
						</p>
					</div>
					<div className='px-6 pb-0 mb-0 top-12 absolute bottom'>
						<p
							className="z-10 bg-gray-50 rounded-full px-35 py-1 text-sm font-semibold text-secondary-dark mr-2 mb-2">
							{category}
						</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
