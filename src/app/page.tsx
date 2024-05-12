// Important note is that this is running on the server, so we won't see console logs on the client
// side. This lets us keep all database queries private to the server.
import { db } from "~/server/db";

// This tells Next.js not to cache this route which will result in this route being rendered for each user at request time
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Make sure to import from ~/server/db to use our own database instance and not from @vercel/postgres
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((img, i) => (
          <div key={img.id + "-" + i} className="w-48">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
