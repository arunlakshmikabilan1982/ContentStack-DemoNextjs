import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await connectMongoDB();
//     await User.create({ name, email, password: hashedPassword });

//     return NextResponse.json({ message: "User registered." }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "An error occurred while registering the user." },
//       { status: 500 }
//     );
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, password } = await req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await connectMongoDB();
      await User.create({ name, email, password: hashedPassword });
      res.status(200).json({ message: "User registered." });
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
