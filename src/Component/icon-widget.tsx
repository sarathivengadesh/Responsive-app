import React, { ReactNode } from 'react'

export default function IconWidget({color,Icon,radius}:{radius:string,color:string,Icon:ReactNode}) {
    const backgroundColor = `${color}80`; 
  return (
    <div className={`w-16 ${radius} p-5 shadow-md bg-gray-300`} style={{background:backgroundColor}}>{Icon}</div>
  )
}
