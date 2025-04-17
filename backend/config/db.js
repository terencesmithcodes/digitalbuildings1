const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // Check if we should use mock data instead of MongoDB
    if (process.env.USE_MOCK_DATA === 'true') {
      console.log('Using mock data instead of MongoDB'.yellow.bold);
      return { connection: { host: 'mock' } };
    }
    
    // Set strictQuery to handle future MongoDB changes
    mongoose.set('strictQuery', false);
    
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    };
    
    const conn = await mongoose.connect(process.env.MONGO_URI, options);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    
    // Add connection error handler
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });
    
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    
    // If MongoDB connection fails, we can fall back to mock data
    console.log('Falling back to mock data'.yellow.bold);
    return { connection: { host: 'mock' } };
  }
}

module.exports = connectDB