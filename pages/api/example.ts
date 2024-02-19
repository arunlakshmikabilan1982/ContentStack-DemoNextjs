// pages/api/example.js

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, text, message } = req.body;
    console.log(name, email, text, message);

    res.status(200).json(name);
  } else {
    // If the HTTP method is not supported, return an error
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
