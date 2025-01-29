import { useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Select from "react-select";

const chartdata = [
  {
    name: 'Mon',
    Revenue: 350,
  },
  {
    name: 'Tue',
    Revenue: 500,
  },
  {
    name: 'Wed',
    Revenue: 50,
  },
  {
    name: 'Thu',
    Revenue: 400,
  },
  {
    name: 'Fri',
    Revenue: 550,
  },
  {
    name: 'Sat',
    Revenue: 300,
  },
  {
    name: 'Sun',
    Revenue: 250,
  },
];

const options = [
  { value: "0", label: "This Month" },
  { value: "1", label: "This Week" },
  { value: "2", label: "Past Month" },
];

export const RevenueAnalytics = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  return (
    <div className="bg-white col-span-2 p-8 rounded-2xl">
      <div className="flex justify-between flex-col sm:flex-row select">
        <h3 className="text-lg font-medium text-tremor-content-strong mb-4 sm:mb-0">
          Revenue Analytics
        </h3>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="w-30 cursor-pointer"
        />
      </div>
      <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={300}
          data={chartdata}
          margin={{
            top: 40,
            right: 30,
            bottom: 5,
          }}
          barGap={50}
          barSize={30}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickSize={0} tickMargin={15}  />
          <YAxis axisLine={false}  tickSize={0} tickMargin={15} />
          <Tooltip />
          <Bar dataKey="Revenue" fill="#2C34BA" activeBar={<Rectangle stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};


export default RevenueAnalytics;



