import React from 'react'
import IconWidget from './icon-widget.tsx';
import Widget from './widget.tsx';
import { trend } from '../utils/helper.tsx';


export default function SummaryWidget({icon,color,totalCount,title,status,percent}:{color: string;
    icon: React.JSX.Element;
    totalCount: number|string;
    title: string;
    status: string;
    percent: number;}) {

  return (
    <Widget className='w-1/4 h- flex flex-col p-4'>
        <IconWidget radius='rounded' Icon={icon} color={color}/>
        <div className='text1'>{title}</div>
        <div className='flex justify-between items-center'>
            <div className="count">{totalCount}</div>
            {trend(status,percent)}
        </div>
    </Widget> 
    )
}
