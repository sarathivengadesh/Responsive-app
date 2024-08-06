import React, { ReactNode } from 'react'

const Widget=({className,children}:{className?:string,children:ReactNode})=> {
  
    return (
    <div className={`rounded bg-primary rounded gap-1 ${className}`}>{children}</div>
  )
}

export default Widget;