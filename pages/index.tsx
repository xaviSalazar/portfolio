
// import { GetServerSidePropsContext } from 'next'
import {services} from '../data'
import ServiceCard from '../components/ServiceCard'

const index = () => {

    return (
        <div className='flex flex-col px-6 pt-1 flex-grow'>
            <h5 className='my-3 font-medium'>I am a current student in Master 2 Embedded Systems program. I have an Electrical Engineering Bachelor, so I have knowledge in microelectronics and semiconductors.</h5>
            <div className='p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow'
            style = {{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
                <h6 className='my-3 text-x1 font-bold tracking-wide'>
                    What I offer
                </h6>
                <div className='grid gap-6 lg:grid-cols-2'>
                    {
                        services.map(service => (
                            <div className='lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg'>
                            < ServiceCard service={service} />
                            </div>
                            
                    ))}
                </div>
            </div>
        </div>
        
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