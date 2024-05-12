// Important note is that this is running on the server, so we won't see console logs on the client
// side. This lets us keep all database queries private and only on the server.
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";

// This tells Next.js not to cache this route which will result in this route being rendered for each user at request time
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
