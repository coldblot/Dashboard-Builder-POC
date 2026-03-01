import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ZAxis } from 'recharts';

function RelationalChart({ data }) {
  return (
    <ScatterChart width={400} height={300}>
      <XAxis dataKey="x" />
      <YAxis dataKey="y" />
      <ZAxis dataKey="size" />
      <Tooltip />
      <Scatter data={data} fill="#ff7300" />
    </ScatterChart>
  );
}

export default RelationalChart;
