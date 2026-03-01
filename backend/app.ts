import express from 'express';
import cors from 'cors';
import widgetRoutes from './routes/widget';

const dotenv = require('dotenv');

dotenv.config("./env")
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/widgets',widgetRoutes);

app.listen(process.env.PORT || 2000,
           ()=>console.log(`server running on port : ${process.env.PORT || 2000}`));