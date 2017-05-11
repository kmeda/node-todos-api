var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://kmeda:123456@ds129031.mlab.com:29031/todoapp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://kmeda:123456@ds129651.mlab.com:29651/todoapptest';
}
 
