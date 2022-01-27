import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
  return (
  <div>
      <img
        src = 'https://media-exp1.licdn.com/dms/image/C4D03AQHUYq-bBHQ8yw/profile-displayphoto-shrink_200_200/0/1614103725738?e=1648684800&v=beta&t=JVFrpWHVvRRNdLzlU7C5PEH_Q1geeDIuYuFyWhMrAM8'
        alt='user avatar'
        className='w-32 h-32 mx-auto rounded-full'
        />

        <h3 className='my-4 text-3x1 font-medium tracking wider font-kaushan'>
            <span className='text-green'>Submit</span> 
            Dey
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>C++ Developer</p>
        <a 
            className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' 
            href='' 
            download='name'>
            <GiTie className='w-6 h-6'/> Download resume
        </a>
        {/* //social icons */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
            <a href=''>
                <AiFillGithub className='w-8 h-8 cursor-pointer' />
            </a>
            <a href=''>
                <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
        </div>
        {/* address */}
        <div 
            className='py-4 my-5 bg-gray-200' 
            style ={{marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation />
                <span>Paris, France</span>
            </div>
            <p className='my-2'>xavicoel@gmail.com</p>
            <p className='my-2'>+33766445477</p>
        </div>
        <button className=' bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>Email me</button>
        <button className=' bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>Toggle me</button>
 
  </div>
  )
}

export default Sidebar
