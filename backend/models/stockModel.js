import { MongoClient } from "mongodb";
import { mongoUri } from "../config.js";

let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(mongoUri);
    await client.connect();
    db = client.db("hrTest");
  }
  return db;
}

export default connectDB;
