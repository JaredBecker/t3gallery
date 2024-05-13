import { getMyImages } from "~/server/queries";

export default async function Images() {
  const images = await getMyImages();

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
