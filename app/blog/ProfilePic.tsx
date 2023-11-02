import React from "react";
import Image from "next/image";
export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/ArnoutTheJordanTrail2023.jpg"
        width={250}
        height={250}
        alt="profile"
        className="border-4 border-black dark:border-slate-600 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        priority={true}
      ></Image>
    </section>
  );
}
