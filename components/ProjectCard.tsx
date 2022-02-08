import { FunctionComponent,useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { IProject } from "../type"
import { MdClose } from "react-icons/md"
import Image from 'next/image'
import { motion } from "framer-motion"
import { stagger, fadeInUp } from "../animations"
import { prefix } from '../prefix.js'

const ProjectCard:FunctionComponent< { 
    project:IProject;
    showDetail:null | number;
    setShowDetail: (id:null | number) => void;
} > = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
        id
    },
    showDetail,
    setShowDetail,
}) => {

    const myLoader = () => {
        return `${prefix}${image_path}`; // REPLACE WITH YOUR IMAGE DIRECTORY
      }   

    return (
        <div >
            <Image 
                loader={myLoader}
                src={image_path} 
                alt={name} 
                className="cursor-pointer" 
                onClick={() => {setShowDetail(id)}}
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
                showDetail === id && (
    
            <div className="absolute grid md:grid-cols-2 top-20 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10 rounded-lg">

                <motion.div 
                    variants={stagger} 
                    initial="initial" 
                    animate="animate">
                    {/* <img src={image_path} alt={name} /> */}

                    <motion.div 
                        variants={fadeInUp} 
                        className="border-4 border-gray-100">
                        <Image 
                            loader = {myLoader}
                            src={image_path} 
                            alt={name} 
                            width="300"
                            height="150"
                            layout="responsive"
                        />
                    </motion.div>

                    <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
                        <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <AiFillGithub /> <span>Github</span>
                        </a>
                        <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <AiFillGithub /> <span>Project</span>
                        </a>
                    </motion.div>

                </motion.div>


                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.h2 variants = {fadeInUp} className="mb-3 text-x1 font-medium md:text-2x1">{name}</motion.h2>
                        <motion.h3 variants = {fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
                        <motion.div variants = {fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map( (tech)=>(
                                <span key = {tech}
                                className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 round"
                                >{tech}</span>
                                ))}
                    </motion.div>
                </motion.div >

                <button onClick={() => setShowDetail(null)}
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