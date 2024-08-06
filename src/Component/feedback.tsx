import { Avatar } from '@mui/material'
import React from 'react'
import { feedBackForm } from '../utils/mockdata.tsx'
import { stringAvatar } from '../utils/helper.tsx'

export default function FeedbackSection() {

    const checkRating =(number)=>{
       return [1,2,3,4,5].map(e => <svg className={`w-5 h-5 ms-1 ${e===number || e<number?"text-yellow-300":"text-gray-500"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
        )
    }
  return (
    <div className='m-2 text-white text-start'>
        <div className='h3 mb-2'>Feedback Section</div>
         <div className='h-[200px] overflow-y-scroll scrollbar-webkit'>
         {feedBackForm?.map(feedback =>(
             <div className='flex flex-col gap-2 border-b-2 border-indigo-500 p-2'>
             <div className='flex items-center gap-2 text1 '><Avatar {...stringAvatar(feedback?.name)} />{feedback?.name}</div>
             <div className="flex items-center">
                 {checkRating(feedback?.rating)}
             </div>
             <div className='text-start ml-2 text1'>{feedback?.description}</div>
         </div>
         ))}
         </div>
    </div>
  )
}
