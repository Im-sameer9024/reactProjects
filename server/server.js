import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import connectDB from './config/db.js';
import cookieParser  from 'cookie-parser';
import UserRoutes from './routes/userRoute.js';


const app = express();
const port  = process.env.PORT || 4000;


// middlewares connections 

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


// db connection
connectDB()

//mounting the routes 
app.use('/api', UserRoutes)



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})