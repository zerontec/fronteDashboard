import React from 'react';
import './chart.scss';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [

  { name: "Enero", Total: 1200 },
  { name: "Febero", Total: 2100 },
  { name: "Marzo", Total: 3100 },
  { name: "Abril", Total: 800 },
  { name: "Mayo", Total: 600 },
  { name: "Junio", Total: 2200 }

]


const Chart = ({ aspect, title }) => {

  return (

    <div className='chart'>
      <div className='title'>{title}</div>
      <ResponsiveContainer width='100%' aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <XAxis dataKey="name" color='gray' />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
          {/* <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
        </AreaChart>



      </ResponsiveContainer>

    </div>

  )




}

export default Chart


/**
 * recharts.org
 * uber.github
 * nivo.rock
 * react-charts.js
 *
 * 
 * 
 * 
 */

