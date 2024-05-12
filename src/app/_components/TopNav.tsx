"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <div className="flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            {/* An upload button requires an endpoint which you define in app/api/uploadthing/core.ts */}
            {/* You can handle the file upload in onUploadComplete */}
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(metadata) => {
                // metadata contains all file related data plus whatever you return in onUploadComplete in uploadthing/core.ts
                console.log(metadata);
                router.refresh();
              }}
              onUploadError={(error) => {
                console.log("failed to upload file");
                console.log(error);
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
