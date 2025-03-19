import React from 'react'

interface SchoolSubjectCardProps {
  subject: string,
  path: string,
  imageSrc?: string,
  hoverImageSrc?: string,
}

const SchoolSubjectCard:React.FC<SchoolSubjectCardProps> = ({
  subject,
  path,
  imageSrc,
  hoverImageSrc,
}) => {
  return (
    <a href={`/resources?subject=${path}`} className='w-full h-80 bg-sfgreen p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer
      hover:bg-sfgreen-light transition duration-300 active:bg-sfgreen-dark'> 
        <h1 className='text-white text-2xl font-semibold'>{subject}</h1>       
    </a>
  )
}

export default SchoolSubjectCard