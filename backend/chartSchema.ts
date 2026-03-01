import { z } from 'zod';

export const CategoricalSchema = z.array(z.object({
  label: z.string(),
  value: z.number()
}));

export const TemporalSchema = z.array(z.object({
  date: z.string(),
  value: z.number()
}));

export const HierarchicalSchema = z.object({
  name: z.string(),
  children: z.array(z.any()) 
});

export const RelationalSchema = z.array(z.object({
  x: z.number(),
  y: z.number(),
  size: z.number()
}));