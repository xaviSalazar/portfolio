import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animations"

const resume = () => {

    return (
        <motion.div className="px-6 py-2"
            variants={routeAnimation} 
            initial="initial"
            animate="animate"
            exit="exit">
            {/* // education & experience  */}

            <div className="grid gap-6 md:grid-cols-2">

                 <motion.div variants={fadeInUp} initial = "initial" animate="animate" >
                <h1 className="my-3 text-3xl font-bold">Education</h1>
                <div>
                    <h5 className="my-2 text-x1 font-bold">Embedded Systems Master</h5>
                    <p className="my-3">Université Paul Sabatier (2019-2021) </p>
                </div>

                <div>
                    <h5 className="my-2 text-x1 font-bold">Electrical Engineering Bachelor</h5>
                    <p className="my-3">Universidad San Francisco de Quito (2013-2018) </p>
                </div>
                </motion.div> 

                <motion.div variants={fadeInUp} initial = "initial" animate="animate" >
                <h5 className="my-3 text-3xl font-bold">Experience</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">C++ Developer</h5>
                    <p className="font-semibold"> ADENTIS (2021-Present) </p>
                    <p className="my-3">C++ drivers development</p>
                </div>

                <div>
                    <h5 className="my-2 text-xl font-bold">Embedded Systems Intern</h5>
                    <p className="font-semibold"> COCOPARKS (March 2021-September 2021) </p>
                    <p className="my-3">Responsible for developing an embedded system image classification</p>
                </div>

                <div>
                    <h5 className="my-2 text-xl font-bold">Embedded Systems Intern</h5>
                    <p className="font-semibold"> LIEBHERR AEROSPACE (May 2020-September 2020) </p>
                    <p className="my-3">HMI development for continuous monitoring and control of a motor test bench</p>
                </div>
                </motion.div > 

             </div>




    {/* // language & tools */}

    <div className="grid gap-6 md:grid-cols-2">
        <div>
            <h5 className="my-3 text-2x1 font-bold">Languages & Frameworks</h5>
            <div className="my-2">
                {
                    languages.map(Language=>(
                        <Bar data = {Language} key = {Language.name}/>
                ))}

            </div>
        </div>

        <div>
            <h5 className="my-3 text-2x1 font-bold">Tools & Softwares</h5>
            <div className="my-2">
                {
                    tools.map(tool=>(
                        <Bar data = {tool} key = {tool.name}/>
                ))}

            </div>
        </div>

    </div>



        </motion.div>
    )
}

export default resume 