import { MongoClient } from "mongodb";
import { mongoUri } from "../config.js";

let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db();
  }
  return db;
}

export default { connectDB };
