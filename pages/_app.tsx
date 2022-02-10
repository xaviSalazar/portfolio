import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import { AnimatePresence } from "framer-motion"
import { useState } from 'react'

function MyApp({ Component, pageProps, router }) {

  const [chatButton, setChatButton] = useState(true);

  return (
  <ThemeProvider attribute='class'>
  <div className= 'grid grid-cols-1'>

  <div className="p-2 sticky top-0 bg-green-500 text-right">
      <button 
        className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200"
        onClick={() => {setChatButton(!chatButton)}}
      >
        Talk to me !
      </button>
  </div>

    {
      chatButton ? (
 
  <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
    <div  className='col-span-12 bg-white dark:bg-dark-500 lg:col-span-3 rounded-2x1 p-4 text-center shadow-custom-light dark:shadow-custom-dark'>
      <Sidebar/>
      </div>
    <div  className='flex flex-col overflow-hidden col-span-12 bg-white lg:col-span-9 rounded-2x1 dark:bg-dark-500'>
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key = {router.route} />
        </AnimatePresence>
    </div>
  </div>
      ) : <p>HOLA MUNDO</p>

    }


  
  </div>
  </ThemeProvider>
  )

  
}

export default MyApp
