import React, { ReactNode } from 'react'

const Search=({
    value,
    placeholder,
    className,
    icon,
    onChange
}:{
    value:string,
    placeholder:string,
    className:string,
    icon?:ReactNode,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) =>{
  return (
    <div className={`relative ${className}`}>
    {icon && (
      <div className="absolute top-2 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </div>
    )}
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full pl-10 pr-4 py-2 box-border text-main-text rounded-xl border border-divider-color text-base leading-5 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 ${icon ? 'pl-10' : 'pl-4'}`}
    />
  </div>
  )
}
export default Search;

