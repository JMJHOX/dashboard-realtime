import prisma from "../../../lib/prisma.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const MessageRequest = req.body;
    await prisma.userMessage.create({ data: MessageRequest });
    res.status(200).json({
      status: "OK",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}
