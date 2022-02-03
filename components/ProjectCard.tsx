import { FunctionComponent,useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { IProject } from "../type"
import { MdClose } from "react-icons/md"
import Image from 'next/image'

const ProjectCard:FunctionComponent< { 
    project:IProject;
} > = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    },
}) => {

    const [showDetail, setShowDetail] = useState(false);




    return (
        <div>
            <Image 
                src={image_path} 
                alt={name} 
                className="cursor-pointer" 
                onClick={() => setShowDetail(true)}
                width="300"
                height="150"
                layout="responsive"
            />
            {/* <img 
            src={image_path} 
            alt={name} 
            className="cursor-pointer" 
            onClick={() => setShowDetail(true)}
            /> */}
            <p className="my-2 text-center">{name}</p>

            {
                showDetail && (
    
            <div className="absolute grid md:grid-cols-2 top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2">

                <div>
                    {/* <img src={image_path} alt={name} /> */}
                <Image 
                src={image_path} 
                alt={name} 
                width="300"
                height="150"
                layout="responsive"
            />


                    <div className="flex justify-center my-4 space-x-3">
                        <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <AiFillGithub /> <span>Github</span>
                        </a>
                        <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <AiFillGithub /> <span>Project</span>
                        </a>
                    </div>




                </div>

                <div>
                    <h2 className="mb-3 text-x1 font-medium md:text-2x1">{name}</h2>
                    <h3 className="mb-3 font-medium">{description}</h3>
                    <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                        {
                            key_techs.map( (tech)=>(
                            <span key = {tech}
                            className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 round"
                            >{tech}</span>
                            ))}
                    </div>
                </div>

                <button onClick={() => setShowDetail(false)}
                className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200"
                >
                    <MdClose size={30} />
                </button>

            </div>

            )}
        </div>
    )
}

export default ProjectCard