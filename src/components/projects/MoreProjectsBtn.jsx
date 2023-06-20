import {Link} from "react-router-dom";
import Button from "../reusable/Button";

export const MoreProjectsBtn = (props) => {
    const {value} = props;
    return (
        <div className="mt-8 sm:mt-16 flex justify-center">
            <Link
                to="/projects"
                className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                aria-label="More Projects"
            >
                <Button title={value ? value : "More Projects"} />
            </Link>
        </div>
    )
}

export default MoreProjectsBtn;