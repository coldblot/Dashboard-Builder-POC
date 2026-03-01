import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function CategoricalChart({ data }) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default CategoricalChart;
