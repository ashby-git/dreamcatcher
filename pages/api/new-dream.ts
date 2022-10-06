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

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const dreamsCollection = db.collection("dreams");

    const result = await dreamsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Dream inserted!" });
  }
}
