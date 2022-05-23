import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart,Legend,Bar,Pie,PieChart } from 'recharts';
const Recharts = () => {
    const data = [
        {
            "month": "jan",
            "investment":1700000,
            "sell": 900000,
            "profit": 303060
        },
        {
            "month": "fab",
            "investment":1700000,
            "sell": 1000000,
            "profit": 410470
        },
        {
            "month": "Mar",
            "investment":1700000,
            "sell": 1300000,
            "profit": 520800
        },
        {
            "month": "Apr",
            "investment":1800000,
            "sell": 1600000,
            "profit": 630280
        },
        {
            "month": "May",
            "investment":2000000,
            "sell": 1350000,
            "profit": 467000
        },
        {
            "month": "Jun",
            "investment":2300000,
            "sell": 1800000,
            "profit": 710270
        },
        {
            "month": "Jul",
            "investment":1800000,
            "sell": 1530000,
            "profit": 480200
        },
        {
            "month": "Aug",
            "investment":1900000,
            "sell": 1700000,
            "profit": 570000
        }
    ]
    return (
        <div>
            <h1 className='text-4xl text-accent'>Our Income revenue figures</h1>
        <div className='lg:flex lg:flex-row mt-5 mb-5 justify-evenly'>
         <div>
           <h4 className="text-2xl text-accent">Month wise sell</h4>
           <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
           </LineChart>
      </div>
      <div>
        <h4 className='text-2xl text-accent'>Sell vs profit</h4>
         <AreaChart width={730} height={250} data={data}
             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
             <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                 <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
               </linearGradient>
               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                 <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
               </linearGradient>
             </defs>
             <XAxis dataKey="month" />
             <YAxis />
             <CartesianGrid strokeDasharray="3 3" />
             <Tooltip />
             <Area type="monotone" dataKey="profit" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
             <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
           </AreaChart>
      </div>
        </div>
        <div className="lg:flex lg:flex-row mt-5 justify-evenly">
           <div>
           <h4 className='text-2xl text-accent'>Invesment vs profit</h4>
           <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="profit" fill="#82ca9d" />
            </BarChart>
           </div>
           <div>
           <h4 className='text-2xl text-accent'>Invesment vs profit</h4>
           <PieChart width={730} height={250}>
              <Pie data={data} dataKey="profit" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={data} dataKey="profit" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
           </div>
        </div>
     </div>
    );
};

export default Recharts;