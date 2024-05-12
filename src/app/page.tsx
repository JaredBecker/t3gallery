// Important note is that this is running on the server, so we won't see console logs on the client
// side. This lets us keep all database queries private to the server.
import { db } from "~/server/db";

// This tells Next.js not to cache this route which will result in this route being rendered for each user at request time
export const dynamic = "force-dynamic";

// Uploaded via uploadthing.com
const mockUrls = [
  "https://utfs.io/f/3fe8e8da-95e2-49d0-bfb4-4cbc98b80a3b-5pd0us.jpg",
  "https://utfs.io/f/ac39f599-ad97-49f6-a471-fdd3573d1b26-qnj95w.jpg",
];

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default async function HomePage() {
  // Make sure to import from ~/server/db to use our own database instance and not from @vercel/postgres
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <p className="text-2xl">{post.name}</p>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((img, i) => (
          <div key={img.id + "-" + i} className="w-48">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
