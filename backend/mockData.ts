import { z } from 'zod';
import { CategoricalSchema, TemporalSchema, HierarchicalSchema, RelationalSchema } from './chartSchema.js';


type CategoricalData = z.infer<typeof CategoricalSchema>;
type TemporalData = z.infer<typeof TemporalSchema>;
type HierarchicalData = z.infer<typeof HierarchicalSchema>;
type RelationalData = z.infer<typeof RelationalSchema>;

export function generateCategorical(): CategoricalData {
  const labels = ['Electronics', 'Clothing', 'Groceries', 'Furniture', 'Books.js'];
  return labels.map(label => ({
    label,
    value: Math.floor(Math.random() * 100) + 10
  }));
}

export function generateTemporal(): TemporalData {
  const data = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    data.push({
      date: d.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 500) + 100
    });
  }
  return data;
}

export function generateHierarchical(): HierarchicalData {
  return {
    name: 'main',
    children: [
      { name: 'Electronics', children: [{ name: 'Bulb', value: 10 }, { name: 'Fan', value: 20 }] },
      { name: 'Clothing', children: [{ name: 'Jeans', value:20 }, { name: 'Shirt', value: 20 }] },
      { name: 'Furniture', children: [{ name: 'Bed',value:10 }, { name: 'Sofa', value:20 }] }
    ]
  };
}

export function generateRelational():RelationalData {
  return Array.from({ length: 20 }, () => ({
    x: Math.round(Math.random() * 50),
    y: Math.round(Math.random() * 50),
    size: Math.round(Math.random() * 10) + 5
  }));
}