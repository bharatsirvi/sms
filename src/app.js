
import express from 'express';
import bodyParser from 'body-parser';
import teacherRoutes from './routes/teacherRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/teacher', teacherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});