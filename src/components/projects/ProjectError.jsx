import MoreProjectsBtn from "./MoreProjectsBtn";

export const ProjectError = () => {
    return (
        <div>
            <div className={"text-center text-white"}>
                <h1>404</h1>
                <p>"Oops! The project you're looking for doesn't seem to exist. Please check if you have the correct project name or try browsing our other projects."</p>
            </div>
            <MoreProjectsBtn value={"Back to all projects"} />
        </div>
    )
}

export default ProjectError;