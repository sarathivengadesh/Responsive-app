import React from 'react'
import { trend } from '../utils/helper.tsx'
import RechartPieChart from './Charts/piechart.tsx'
import { pieChartData } from '../utils/mockdata.tsx'

export default function NetProfit({totalProfit,status,percent}:{totalProfit:string,status:string,percent:number}) {

  return (
    <div className='p-2 w-full h-full flex flex-row justify-between'>
     <div className='h-full flex flex-col justify-between'>
        <div className='text1'>Net Profit</div>
        <div className='count'>{totalProfit}</div>
        {trend(status,percent)}
     </div>
     <div className='flex flex-row justify-end'>
      <div className='w-full mx-0'>
          <RechartPieChart
            data={pieChartData}
            totalCount="70"
            label1='Goal'
            label2='Completed'
            innerRadius={35}
            outerRadius={45}
          />
          <div className='text2 mx-auto'>*The values here has been rounded off.</div>
      </div>
     </div>
    </div>
  )
}
