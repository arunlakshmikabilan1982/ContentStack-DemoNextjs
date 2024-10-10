// pages/api/example.js

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, phone, date, time, people, message } = req.body;
    console.log(req.body);

    res.status(200).json(name);
  } else {
    // If the HTTP method is not supported, return an error
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
