import Bar from "../components/Bar"
import { languages, tools } from "../data"

const resume = () => {
    return (
        <div className="px-6 py-2">
    {/* // education & experience  */}

        <div className="grid gap-6 md:grid-cols-2">

           <div>
               <h5 className="my-3 text-2x1 font-bold">Education</h5>
               <div>
                   <h5 className="my-2 text-x1 font-bold">Embedded Systems Engineer</h5>
                   <p className="font-semibold">Université Paul Sabatier (2019-2021) </p>
               </div>
            </div> 

            <div>
               <h5 className="my-3 text-2x1 font-bold">Experience</h5>
               <div>
                   <h5 className="my-2 text-x1 font-bold">C++ Developer</h5>
                   <p className="font-semibold"> ADENTIS (2021-Present) </p>
                   <p className="my-3">I develop C++ drivers with microcontrollers</p>
               </div>
            </div> 




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



        </div>
    )
}

export default resume 