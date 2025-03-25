import React, { useState } from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface MenuItemProps {
    text: string
}

const MenuItem:React.FC<MenuItemProps> = ({
    text
}) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(prev => !prev)
    }

    return (
        <div onClick={() => handleClick()} className='w-fit h-fit flex flex-row gap-1 items-center justify-start cursor-pointer text-sfoffwhite'>
            {selected ? <CheckBoxIcon className='text-sfgreen-light'/> : <CheckBoxOutlineBlankIcon/> }
            <h1>{text}</h1>
        </div>
    )
}

export default MenuItem