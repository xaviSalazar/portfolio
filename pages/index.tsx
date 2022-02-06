
// import { GetServerSidePropsContext } from 'next'
import {services} from '../data'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'

const index = () => {

    return (
        <motion.div 
            className='flex flex-col px-6 pt-1 flex-grow' 
            variants={routeAnimation} 
            initial="initial"
            animate="animate"
            exit="exit">
            <h6 className='my-3 font-medium'>I am a passionate learner and I seek out new knowledge and I am actively developing new skills</h6>
            <div className='p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow'
            style = {{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
                <h6 className='my-3 text-x1 font-bold tracking-wide'>
                    What I offer
                </h6>
                <motion.div 
                    className='grid gap-6 lg:grid-cols-2' 
                    variants={stagger} 
                    initial="initial" 
                    animate="animate">
                    {/* children's initial and animate property should be same as the parent during a stagger effect */}
                    {
                        services.map(service => (
                            <motion.div 
                             variants={fadeInUp}
                            className='lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg'
                            key={service.title}
                            >
                            < ServiceCard service={service} />
                            </motion.div>
                            
                    ))}
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
    
//     //calculation 
//     const res = await fetch('http://localhost:3000/api/services')
//     const data= await res.json()

//         console.log("SERVER",services);
//     return {
//         props: {
//             services: data.services,
//         }
//     }
// } 