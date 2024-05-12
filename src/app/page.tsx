import Link from "next/link";

// Uploaded via uploadthing.com
const mockUrls = [
  "https://utfs.io/f/3fe8e8da-95e2-49d0-bfb4-4cbc98b80a3b-5pd0us.jpg",
  "https://utfs.io/f/ac39f599-ad97-49f6-a471-fdd3573d1b26-qnj95w.jpg",
];

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
