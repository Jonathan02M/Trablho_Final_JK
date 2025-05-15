const express = require('express');
 const userRouter = require('./router/user');
const productRouter = require('./router/product');
const categoryRouter = require('./router/category');
// const orderRouter = require('./router/order');
const database = require('./config/database');
 
console.log('Starting server...');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
// app.use('/api/order', orderRouter);
app.use('/api/category', categoryRouter);

database.sync( { force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });