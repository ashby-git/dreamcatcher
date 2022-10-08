import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const data = req.body;

    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URI);
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      const db = client.db();
      const dreamsCollection = db.collection("dreams");
      const result = await dreamsCollection.insertOne(data);
      console.log(result);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }
    res.status(201).json({ message: "Dream inserted!" });
  }
}
