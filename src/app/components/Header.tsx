import React from 'react'
import { SearchRounded } from '@mui/icons-material'

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4 px-8 bg-sfgreen w-full text-sfoffwhite text-lg font-medium">
      <div className="flex-1 flex flex-row gap-8 justify-start items-center">
        <a href="#home" className="no-underline text-inherit">Explore</a>
        <div className='flex flex-row justify-start items-center relative w-full'>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 border border-neutral-200 text-red rounded-lg w-fit focus:w-full focus:border-sfoffwhite font-normal"
          /> 
          <button className="absolute left-3 text-sfoffwhite" ><SearchRounded/></button>
        </div>     
      </div>
      <div className="font-bold text-xl text-center flex-1">Logo(x2)</div>
      <nav className="flex-1">
        <ul className="flex justify-end list-none m-0 p-0 flex-row gap-8">
          <li className=""><a href="/" className="no-underline text-inherit">Home</a></li>
          <li className=""><a href="/resources" className="no-underline text-inherit">Resources</a></li>
          <li className=""><a href="/events" className="no-underline text-inherit">Events</a></li>
          <li className=""><a href="/about" className="no-underline text-inherit">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header