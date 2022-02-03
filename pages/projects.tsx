import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {


    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState("all");

    const handlerFilterCategory = (category: Category | 'all') => {

        if(category === 'all'){
            setProjects(projectsData);
            setActive(category)
            return;
        }

        const newArray = projectsData.filter((project) => project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    }





    return (
        <div className="px-5 py-2 overflow-y-scroll" style={{height:'65vh'}}>
            <ProjectsNavBar handlerFilterCategory={handlerFilterCategory} active = {active}/>
        <div className="relative grid grid-cols-12 gap-4 my-3">
            {
                projects.map(project=>(
                    <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg">
                    <ProjectCard project ={project} key={project.name}/>
                    </div>

                ))
            }
        </div>
        </div>
    );
};
export default Projects