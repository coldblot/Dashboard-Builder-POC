import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function TemporalChart({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
}

export default TemporalChart;
