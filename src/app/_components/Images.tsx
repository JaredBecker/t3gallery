import { db } from "~/server/db";

export default async function Images() {
  // Make sure to import from ~/server/db to use our own database instance and not from @vercel/postgres
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((img) => (
        <div key={img.id} className="w-48">
          <img src={img.url} />
        </div>
      ))}
    </div>
  );
}
