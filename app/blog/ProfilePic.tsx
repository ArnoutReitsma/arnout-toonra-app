import React from "react";
import Image from "next/image";
export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/arnout-reitsma-nobg.png"
        width={200}
        height={200}
        alt="profile"
        priority={true}
      ></Image>
    </section>
  );
}
