
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';

export const trend=(status:string,percent:number)=>{
    if(status==="Decrease"){
       return <div className='text1 text-red-500'><ArrowDropDownIcon/>{`${percent}%`}</div>
    }else if(status==="Increase"){
       return <div className='text1 text-green-500'><ArrowDropUpIcon/>{`${percent}%`}</div>
    }
}
export const PieChartLabel = ({ viewBox, value1, value2,value3 }) => {
   const { cx, cy } = viewBox;
   return (
     <>
       <text x={cx} y={cy - 15} textAnchor="middle" dominantBaseline="central">
         <tspan alignmentBaseline="middle" fontSize="16px" fontWeight="600" fill='white' fontFamily="Poppins">
           {value1}
         </tspan>
       </text>
       <text x={cx} y={value1 ? cy  : cy} textAnchor="middle" dominantBaseline="central">
         <tspan alignmentBaseline="middle" fontSize="10px" fill='white' fontFamily="Poppins">
           {value2}
         </tspan>
       </text>
       {value3 && <text x={cx} y={value1 ? cy + 12 : cy} textAnchor="middle" dominantBaseline="central">
         <tspan alignmentBaseline="middle" fontSize="10px" fontFamily="Poppins" fill='white'>
           {value3}
         </tspan>
       </text>}
     </>
   );
 };
 function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name.split(' ')?.length>1?`${name.split(' ')?.[0]?.[0]}${name.split(' ')?.[1]?.[0]}`:name?.[0],
  };
}

export const StautsTag =({type})=>{

  return <div className={`w-fit p-1 text-white rounded ${type==="Delivered"?"bg-green-700":"bg-red-700"}`}>{type}</div>
}