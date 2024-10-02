require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const {Server} = require('socket.io')

// Create HTTP server to use with socket.io

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
})
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGODB_URI);
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => console.log('Connected Successfully'));

io.on('connection', (socket) =>{
  console.log('A user connected', socket.id)

  socket.on('sendMessage', (message) => {
    console.log('Message received', message)

  })

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id)
  })

})
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
