import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import { iconStyle } from '../utils/constant.tsx';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar=()=> {
    const location = useLocation();
    const checkRouterActive =(condition:boolean)=>{
      return condition?iconStyle.active:iconStyle?.inActive
    }
    const menu = [
        {
            icon:<HomeIcon sx={{fill:checkRouterActive(location?.pathname==="/")}} /> ,
            path:"/",
        },
        {
            icon:<InsertChartIcon sx={{fill:checkRouterActive(location?.pathname==="/chart")}} /> ,
            path:"/chart",
        },
        {
            icon:<AssignmentIcon sx={{fill:checkRouterActive(location?.pathname==="/data")}} /> ,
            path:"/data",
        }
    ]
  return (
    <div>{menu?.map(e=>(
        <Link to={e?.path}>
            <div className={`ease-in duration-300 my-2 p-2 border-l-4 ${e?.path===location?.pathname? `border-active`:`border-primary`}`}>
                {e?.icon}
            </div>
        </Link> 
    ))}</div>
  )
}

export default Sidebar;