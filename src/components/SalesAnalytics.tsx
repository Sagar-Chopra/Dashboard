import { useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import Select from "react-select";

const data = [
  { name: 'Branch 1', value: 400 },
  { name: 'Branch 2', value: 300 },
  { name: 'Branch 3', value: 300 },
];
const COLORS = [ '#1E3BB3', '#47AAB6', '#53CEFA'];

const options = [
  { value: "0", label: "This Month" },
  { value: "1", label: "This Week" },
  { value: "2", label: "Past Month" },
];

const SalesAnalytics = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  return (
    <div className="bg-white col-span-2 p-8 rounded-2xl">
      <div className="flex justify-between flex-col sm:flex-row select">
        <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong  mb-4 sm:mb-0">
          Sales Analytics
        </h3>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="w-30 cursor-pointer bg-transparent"
        />
      </div>
      <div className="mt-8 flex items-center justify-center gap-x-6 rehcartDiv flex-col lg:flex-row">
      <PieChart width={300} height={300} >
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={90}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div>
        <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-[#1E3BB3]"></div>
          <h2 className="text-sm text-gray-400">Branch 1 (30%)</h2>
        </div>
        <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-[#47AAB6]"></div>
          <h2 className="text-sm text-gray-400">Branch 2 (40%)</h2>
        </div>
        <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#53CEFA]"></div>
          <h2 className="text-sm text-gray-400">Branch 3 (30%)</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
