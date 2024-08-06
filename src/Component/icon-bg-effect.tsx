import React, { ReactNode } from 'react'

export default function IconEffect({icon,className}:{icon:ReactNode,className?:string}) {
    const backgroundColor = `#9899A130`; 
  return (
    <div className={`cursor-pointer p-2 rounded-full text-gray ${className}`} style={{background:backgroundColor}}>
       {icon}
    </div>
  )
}
