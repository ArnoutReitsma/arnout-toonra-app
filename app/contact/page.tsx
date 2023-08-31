import { sendMail } from "@/service/mailService";
import React from "react";

function page() {
  async function submitMail(e: FormData) {
    "use server"
    const name = e.get("name").toString();
    const email = e.get("email").toString();
    const message = e.get("message").toString();
    await sendMail(
      `Message from arnout.dev - from "${name}"`,
      "arnout.reitsma@gmail.com",
      `Recieved message from "${name}", email: "${email}" 
Message: 
"${message}"`
    );
  }
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="font-extrabold text-4xl mb-5">Contact me!</h1>
      <form action={submitMail}>
        <div className="grid grid-cols-2 gap-3 text-black">
          <input
            name="name"
            placeholder="Name"
            type="text"
            className="col-span-1 border border-gray-300 p-2 rounded-md text-black"
          ></input>
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="col-span-1 border border-gray-300 p-2 rounded-md text-black"
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="col-span-2 border border-gray-300 p-2 rounded-md text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 rounded-3xl p-5 mt-3"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default page;
