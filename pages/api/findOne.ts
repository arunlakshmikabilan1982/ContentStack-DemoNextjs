import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectMongoDB();
      const { email } = await req.body;
      const user = await User.findOne({ email });
      console.log("user: ", user);

      res.status(200).json({ user });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while registering the user." });
    }
  } else {
    // If the HTTP method is not supported, return an error
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
