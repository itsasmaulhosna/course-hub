import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URI;

if (!uri) {
  throw new Error("Missing MONGO_DB_URI");
}

const client = new MongoClient(uri);

export default client;