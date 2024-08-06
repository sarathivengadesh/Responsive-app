import React, { ReactNode } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import Search from './search.tsx';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import IconEffect from './icon-bg-effect.tsx';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import Sidebar from './sidebar.tsx';
import { stringAvatar } from '../utils/helper.tsx';

export default function Header({children}:{children:ReactNode}) {
  return (
        <div className='w-full h-screen flex flex-row'>
            <div className='grow-0 w-12 h-full bg-primary'>
                <WidgetsIcon sx={{width:35,height:35,fill:"#7396FE"}} className='m-2 w'/>
                <Sidebar/>
            </div>
            <div className='w-full flex flex-col'>
              <div className='p-2 px-4 w-full bg-primary flex justify-between'>
              <Search value='' onChange={()=>{}} placeholder='' className='basic-1/4 h-8' icon={<SearchIcon/>} />
                <div className='flex justify-between gap-4'>
                <IconEffect icon={<EmailIcon />}/>
                <IconEffect icon={<SettingsIcon/>}/>
                <IconEffect icon={<NotificationsIcon/>}/>
                <Avatar {...stringAvatar("Nimir")}/>
                </div>
              </div>
              {children}
            </div>
        </div>

  )
}
