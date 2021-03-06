import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { ImBlogger } from 'react-icons/im'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import { prefix } from '../prefix.js'


const Sidebar = () => {

    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        setTheme(theme=="light"?"dark":"light");
    }

    const myLoader = () => {
        //return 'https://media-exp1.licdn.com/dms/image/C4D03AQHUYq-bBHQ8yw/profile-displayphoto-shrink_200_200/0/1614103725738?e=1654732800&v=beta&t=3huz9fTzcrPCL3Bph8KoEdUlJ3-BmUf0FT8dMYzhvy8'
        return `${prefix}/images/profile.jpg`;
      }

      const cvPath = () => {
        return `${prefix}/assets/ResumeVS.pdf`; // REPLACE WITH YOUR IMAGE DIRECTORY
      }   


  return (
  <div>
      <Image
        loader = {myLoader}
        src = '/images/profile.jpg'
        alt='avatar'
        width="128"
        height="128" 
        className='mx-auto border rounded-full'
        layout = "fixed"
        />

        <h3 className='my-4 text-3x1 font-medium tracking wider font-kaushan'>
            <span >VICTOR </span> 
            <br/>
            SALAZAR
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full dark:bg-black-500'>Embedded Software Developer</p>
        <a 
            className='flex items-center justify-center px-2 py-1 my-3 dark:bg-dark-200 bg-gray-200 rounded-full' 
            //href='/assets/ResumeVS.pdf'
            href={cvPath()}
            download='ResumeVS.pdf'>
            <GiTie className='w-6 h-6'/> Download resume
        </a>
        {/* //social icons */}
        <div className='flex justify-around w-9/12 mx-auto my-5 md:w-full'>
            <a href='https://github.com/xaviSalazar' target="_blank" rel="noopener noreferrer">
                <AiFillGithub className='w-8 h-8 cursor-pointer' />
                <span >Github</span>
            </a>
            <a href='https://xavisalazar.github.io/blog-debut/' target="_blank" rel="noopener noreferrer">
                <ImBlogger className='w-8 h-8 cursor-pointer' />
                <span >Blog</span>
            </a>
            <a href='https://www.linkedin.com/in/victor-salazar-32513614a' target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                <span >Linkedin</span>
            </a>
        </div>
        {/* address */}
        <div 
            className='py-4 my-5 bg-gray-200 dark:bg-dark-200' 
            style ={{marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation />
                <span>Paris, France</span>
            </div>
            <p className='my-2'>xavicoel@gmail.com</p>
            <a href="tel:+33766445477">+33766445477</a>
        </div>
        <button className=' bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none'
        onClick={() => window.open('mailto:xavicoel@gmail.com')}>
            Email me
        </button>
        <button 
        onClick={changeTheme}
        className='bg-black bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>
            Toggle Theme
        </button>
 
  </div>
  )
}

export default Sidebar