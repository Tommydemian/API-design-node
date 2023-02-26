import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://tomasgilamoedo:capovs2846@testcluster.yhqunca.mongodb.net/?retryWrites=true&w=majority', {
useUnifiedTopology: true,
useNewUrlParser: true
})
.then(() => {
  console.log('Database connected successfully oh ya baby!');
})
.catch(err => {
  console.error('Error connecting to the database', err);
});