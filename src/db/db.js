// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config(); // .env faylidan o'qib oladi


// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log('MongoDB-ga muvaffaqiyatli ulandik')
//     })
//     .catch((error) => {
//         console.error('MongoDB-ga ulanishda xatolik:', error)
//     })

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const url = process.env.Local_URL_DB;
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to the database!");
  } finally {
    await client.close();
  }
}

run().catch(console.error);
