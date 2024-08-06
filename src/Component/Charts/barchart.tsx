import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from 'recharts';
import CustomSelect from '../Reusable/select.tsx';
import { CustomMenu, dailyData, monthlyData, weeklyData } from '../../utils/mockdata.tsx';


export default function CustomBarChart() {
    const [time,setTime]=useState(CustomMenu[0]);
    const [data,setData]=useState<{ name: string; value: number; }[]|[]>([]);
    useEffect(()=>{
    if(time?.value==="daily"){
      setData(dailyData);
    }else if(time?.value==="monthly"){
      setData(monthlyData)
    }else{
      setData(weeklyData)
    }
    },[time])
    return (
        <div className='w-full h-full p-2 flex flex-col gap-1'>
            <div className='text-white w-full flex flex-row justify-between items-center'>
                <div className='h3 mb-2'>Activity</div>
                <CustomSelect selectValue={time} setSelectedValue={setTime} option={CustomMenu} />
            </div>
            <ResponsiveContainer width="100%" height={180}>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} /> 
                        <XAxis dataKey="name" /> 
                        <YAxis />
                    <Bar dataKey="value" fill="#8884d8" radius={[50, 50, 50, 50]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
     
    );

}
