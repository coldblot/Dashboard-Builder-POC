import { registerWidget } from './widgetRegistry';
import CategoricalChart from '../widgets/CategoricalChart';
import TemporalChart from '../widgets/TemporalChart';
import HierarchicalChart from '../widgets/HierarchicalChart';
import RelationalChart from '../widgets/RelationalChart';


const baseURL = process.env.REACT_APP_API_URL;

registerWidget({ type: 'Categorical', component: CategoricalChart, fetchUrl: `${baseURL}/api/widgets/categorical` });
registerWidget({ type: 'Temporal', component: TemporalChart, fetchUrl: `${baseURL}/api/widgets/temporal` });
registerWidget({ type: 'Hierarchical', component: HierarchicalChart, fetchUrl: `${baseURL}/api/widgets/hierarchical` });
registerWidget({ type: 'Relational', component: RelationalChart, fetchUrl: `${baseURL}/api/widgets/relational` });