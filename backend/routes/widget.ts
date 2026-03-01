import { Router } from 'express';
import {
  generateCategorical,
  generateTemporal,
  generateHierarchical,
  generateRelational
} from '../mockData';

const router = Router();

router.get('/categorical', (req, res) => {
  const data = generateCategorical();
  res.json({ success: true, data });
});

router.get('/temporal', (req, res) => {
  const data = generateTemporal();
  res.json({ success: true, data });
});

router.get('/hierarchical', (req, res) => {
  const data = generateHierarchical();
  res.json({ success: true, data });
});

router.get('/relational', (req, res) => {
  const data = generateRelational();
  res.json({ success: true, data });
});

export default router;
