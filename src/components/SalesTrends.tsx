import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const data = [
  {
    name: 'Mon',
    "Online Payment": 400,
    "Offline Sales": 240,
  },
  {
    name: 'Tue',
    "Online Payment": 300,
    "Offline Sales": 139,
  },
  {
    name: 'Wed',
    "Online Payment": 200,
    "Offline Sales": 580,
  },
  {
    name: 'Thu',
    "Online Payment": 278,
    "Offline Sales": 390,
  },
  {
    name: 'Fri',
    "Online Payment": 189,
    "Offline Sales": 480,
  },
  {
    name: 'Sat',
    "Online Payment": 239,
    "Offline Sales": 380,
  },
  {
    name: 'Sun',
    "Online Payment": 349,
    "Offline Sales": 430,
  },
];

const SalesTrends = () => {
  return (
    <div className="col-span-3 bg-white p-4 rounded-2xl">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Sales Trends
      </h3>
      <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Legend verticalAlign="top" height={70} align="left" iconType='circle' />
          <CartesianGrid vertical={false}  />
          <XAxis dataKey="name" tickSize={0} tickMargin={15} />
          <YAxis axisLine={false} tickSize={0} tickMargin={15} />
          <Tooltip />
          <Area type="monotone" dataKey="Online Payment" stackId="1" stroke="#1E3BB3" fill="#1E3BB3" />
          <Area type="monotone" dataKey="Offline Sales" stackId="1" stroke="#47AAB6" fill="#47AAB6" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesTrends;;
