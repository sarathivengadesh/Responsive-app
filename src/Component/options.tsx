import React from 'react'
import { options } from '../utils/mockdata.tsx'
import IconWidget from './icon-widget.tsx'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IconEffect from './icon-bg-effect.tsx';

export default function Options() {
  return (
    <div className='m-2'>
      {options?.map((e)=>(
        <div className='px-3 py-1 flex items-center' key={e?.id}>
           <IconWidget radius="rounded-full" Icon={e?.icon} color={e?.color}/>
           <span className='text-white ml-3'>{e?.title}</span>
           <IconEffect className="ml-auto" icon={<ArrowRightIcon/>} />
        </div>
      ))}
    </div>
  )
}
