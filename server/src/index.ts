import express from 'express';
import cors from 'cors';
import { PORT } from './config/constants';
import { mhsRouter } from './routes';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Selamat Datang di RESTful API gateway');
}) ;
app.use('/mhs', mhsRouter);

app.listen(PORT, () => {
    console.log(`Endpoint sudah siap diakses pada port ${PORT}`);
});