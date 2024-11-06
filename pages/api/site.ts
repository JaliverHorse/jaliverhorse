import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    var uri = "mongodb+srv://luke:V5Rfv64i00d7N1fZ@cluster0.iuesd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   var client = new MongoClient(uri,{});
   const db = client.db("jaliverhorsedb");
   const collection = db.collection('Site');
var results =await collection.find().toArray(); 
    res.status(200).json(results);
  }

  /* Rewrite in future - Not for Prod */