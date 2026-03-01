import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';

const DATA_COLORS = ['#4361ee', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c'];

function HierarchicalChart({ data }) {
  const flatData = data.children.map((item, index) => ({
    name: item.name,
    value: item.children
      ? item.children.reduce((sum, c) => sum + (c.value || 0), 0)
      : item.value,
    fill: DATA_COLORS[index % DATA_COLORS.length]
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <Treemap
        data={flatData}
        dataKey="value"
        nameKey="name"
        stroke="#fff"
      >
        <Tooltip />
      </Treemap>
    </ResponsiveContainer>
  );
}

export default HierarchicalChart;
