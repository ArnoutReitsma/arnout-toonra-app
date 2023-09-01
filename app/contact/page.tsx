"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { submitMail } from "./SendMail";
import 'react-toastify/dist/ReactToastify.css';

function Page() {
  async function onSubmit(formData: FormData) {
    const res = await submitMail(formData);
    setMessage(res.message);
    setKey((prevKey) => prevKey++);
  }
  const [toastMessage, setMessage] = useState<string>("");
  const [key, setKey] = useState<number>(0);
  useEffect(() => {
    if (toastMessage) {
      console.log(toastMessage);
      toast(toastMessage, {
        hideProgressBar: true,
        autoClose: 2000,
        position: 'bottom-center',
      });
    }
  }, [toastMessage, key]);
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="font-extrabold text-4xl mb-5">Contact me!</h1>
      <form action={onSubmit}>
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
          className="bg-gray-700 cursor-pointer  hover:bg-white hover:text-gray-800 hover:rounded-xl transition-all duration-300 ease-linear rounded-3xl p-5 mt-3"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Page;
