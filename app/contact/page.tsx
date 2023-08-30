import React from "react";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="font-extrabold text-4xl mb-5">Contact me!</h1>
      <form>
        <div className="grid grid-cols-2 gap-3 text-black">
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            className="col-span-1"
          ></input>
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="col-span-1"
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="col-span-2"
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
