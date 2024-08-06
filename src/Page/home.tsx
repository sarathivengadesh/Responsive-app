import React from 'react'
import Widget from '../Component/Reusable/widget.tsx'
import SummaryWidget from '../Component/Reusable/summary-widget.tsx'
import NetProfit from '../Component/netprofit.tsx'
import { orderHeader, orders, summaryData } from '../utils/mockdata.tsx'
import Options from '../Component/options.tsx'
import FeedbackSection from '../Component/feedback.tsx'
import CustomBarChart from '../Component/Charts/barchart.tsx'
import {OrderItem, TableComponent} from "../Component/Table.tsx"


export default function Home() {
  return (
    <div className='w-full h-screen bg-secondary p-2 overflow-scroll scrollbar-webkit  '>
        <h2 className="h1 py-2">Dashboard</h2>
        <div className='grid grid-cols-4 gap-4 md:grid-cols-7 xl:gap-4'>
            <div className='col-span-4 xl:col-span-4 flex gap-1'>
                {summaryData?.map(icon=>(
                  <SummaryWidget
                  icon={icon?.icon}
                  color={icon.color}
                  key={icon.id}
                  totalCount={icon?.totalCount}
                  title={icon?.title}
                  status={icon?.status}
                  percent={icon?.percent}
                  />
                ))}
            </div>
            <Widget className='col-span-4 md:col-span-3'>
              <NetProfit totalProfit='$37K' status='Increase' percent={3} />
            </Widget>
            <Widget className='col-span-4 md:col-span-4'>
              <CustomBarChart />
            </Widget>
            <Widget className='col-span-4 md:col-span-3'>
              <Options />
            </Widget>
            <Widget className='col-span-4 md:col-span-4 p-2 '>
              <div className='h3 mb-2'>Recent Orders</div>
              <TableComponent 
               tableHeading={orderHeader}
               row={<OrderItem data={orders}/>}
              />
            </Widget>
            <Widget className='col-span-4 md:col-span-3'>
              <FeedbackSection />
            </Widget>
        </div>        
    </div>
  )
}
