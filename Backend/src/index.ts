import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression';
import cors from 'cors';
import UserRoutes from './routes/UserRoutes';


//invoke express
const app = express();

//config cors
// app.use(
//     cors({
//       origin: 'http://localhost:3000/',
//       credentials: true,
//     })
// );
var corss = require('cors');
app.use(corss());

//initialise compression ,cookieParser ,bodyParser
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

//--------------------Set Routes-----------------------------------------------
app.use('/api/user', UserRoutes);

//-----------------------------------------------------------------------------

//create server
const server= http.createServer(app);

//listen server
server.listen(9999, () => {
    console.log(`Server running on http://localhost:9999/`);
})