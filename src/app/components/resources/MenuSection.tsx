import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuItem from './MenuItem';

interface MenuSectionProps {
    sectionTitle: string;
    items: string[];
}

const MenuSection:React.FC<MenuSectionProps> = ({
    sectionTitle,
    items
}) => {
    const [open , setOpen] = useState(true)

    const handleClick = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className='w-full h-fit flex-shrink bg-sfgray flex flex-col items-center justify-center border-2 border-sfoffwhite rounded-sm'>
            <div onClick={() => handleClick()} className='w-full h-11 py-4 bg-sfoffwhite flex items-center justify-center cursor-pointer'>
                <h1 className='text-lg font-semibold text-sfgreen-dark'>{sectionTitle}</h1>
                {open ? <ArrowDropDownIcon className='text-sfgreen-dark' /> : <ArrowDropUpIcon className='text-sfgreen-dark' />}
            </div>
            {open && <div className='p-2 w-full h-fit flex flex-col items-start justify-between gap-2'>
                {
                    items.map((item, index) => (
                        <MenuItem key={index} text={item}/>
                    ))
                }
            </div>}
        </div>
    )
}

export default MenuSection