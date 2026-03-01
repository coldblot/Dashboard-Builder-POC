import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import './registry/registerWidgets';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { getWidget } from './registry/widgetRegistry';

const defaults = [
  { i: 'Categorical', type: 'Categorical', x: 0, y: 0, w: 6, h: 4 },
  { i: 'Temporal',    type: 'Temporal',    x: 6, y: 0, w: 6, h: 4 },
  { i: 'Hierarchical',type: 'Hierarchical',x: 0, y: 4, w: 6, h: 4 },
  { i: 'Relational',  type: 'Relational',  x: 6, y: 4, w: 6, h: 4 },
];

function Dashboard() {
  const [layout, setLayout] = useState(() => {
    const saved = localStorage.getItem('dashboard');
    return saved ? JSON.parse(saved) : defaults;
  });

  const [widgetData, setWidgetData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    layout.forEach(async (widget) => {
      try {
        const def = getWidget(widget.type);
        const res = await fetch(def.fetchUrl);
        const json = await res.json();
        setWidgetData(prev => ({ ...prev, [widget.i]: json.data }));
      } catch (err) {
        setErrors(prev => ({ ...prev, [widget.i]: 'Failed to load data' }));
      }
    });
  }, []);

  const handleLayoutChange = (newLayout) => {
    const updated = layout.map(w => {
      const found = newLayout.find(n => n.i === w.i);
      return found ? { ...w, x: found.x, y: found.y, w: found.w, h: found.h } : w;
    });
    setLayout(updated);
      localStorage.setItem('dashboard', JSON.stringify(updated));
  };

  return (
    <GridLayout
      className="layout"
      cols={12}
      rowHeight={80}
      width={1200}
      onLayoutChange={handleLayoutChange}
    >
      {layout.map(widget => {
        const def = getWidget(widget.type);
        const Component = def.component;
        const data = widgetData[widget.i];
        const error = errors[widget.i];

        return (
          <div key={widget.i} data-grid={{ x: widget.x, y: widget.y, w: widget.w, h: widget.h }}
            style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 10 }}>
            <h4>{widget.type}</h4>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!data && !error && <p>Loading...</p>}
            {data && <Component data={data} />}
          </div>
        );
      })}
    </GridLayout>
  );
}

export default Dashboard;
