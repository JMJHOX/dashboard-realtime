import prisma from "../../../lib/prisma.js";
export default async function handler(req, res) {
  const userMessagesQuery = await prisma.userMessage.findMany();

  res.status(200).json(userMessagesQuery);
}
