// This package makes sure that the code in this file is only run on the server
import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  // Make sure to import from ~/server/db to use our own database instance and not from @vercel/postgres
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  // You can use next taint here to prevent the client from seeing info from the server that they shouldn't see like
  // passwords or other sensitive data.

  return images;
}
