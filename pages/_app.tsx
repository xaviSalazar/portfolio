import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'

import Bot  from '../components/Bot'


function MyApp({ Component, pageProps, router }) {
  
  return (
  <ThemeProvider attribute='class'>
  <div>

  <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32' >
    <div  className='col-span-12 bg-white dark:bg-dark-500 lg:col-span-3 rounded-2x1 p-4 text-center shadow-custom-light dark:shadow-custom-dark'>
      <Sidebar/>
      </div>
    <div  className='flex flex-col overflow-hidden col-span-12 bg-white lg:col-span-9 rounded-2x1 dark:bg-dark-500'>
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key = {router.route} />
        </AnimatePresence>
    </div>
    <div>
    <Bot/>
    </div>
  </div>

  
  
  </div>
  </ThemeProvider>
  )
}

export default MyApp
