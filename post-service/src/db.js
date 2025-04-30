// db.js
const mongoose = require('mongoose');

//local mongose connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit on failure
  }
};

// Function to connect to MongoDB Atlas
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected to MongoDB Atlasian');
//     } catch (error) {
//         console.error('MongoDB Atlas connection error:', error);
//         process.exit(1); // Exit on failure
//     }
// };



module.exports = connectDB;
