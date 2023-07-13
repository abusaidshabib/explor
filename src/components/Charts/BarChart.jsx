import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// eslint-disable-next-line react/prop-types
const BarChart = ({bar}) => {

  return (
    <div className="p-14 w-full h-96 shadow-xl border dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100">
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={bar}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cost" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
