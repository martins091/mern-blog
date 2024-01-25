import express from 'express';
import { mongoose } from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.rout.js'

dotenv.config();

mongoose
.connect( process.env.MONGO)
.then(() => {
    console.log('MongoDb is connected')
})
.catch((err) => { 
    console.error(err)
});

const app = express();

app.listen(3000, () => {

console.log('Sever is running on port 3000!')

});

app.use('/api/user', userRoutes);
