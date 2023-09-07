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
    <div className="flex flex-col items-center p-6 md:p-12">
      <h1 className="font-extrabold text-4xl mb-5">Contact me!</h1>
      <form action={onSubmit}>
        <div className="grid grid-cols-2 gap-3 text-black">
          <input
            name="name"
            placeholder="Name"
            type="text"
            className="col-span-1 contact-input"
          ></input>
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="col-span-1 contact-input"
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="col-span-2 contact-input"
          ></textarea>
        </div>
        <button
          type="submit"
          className="dark:bg-gray-700 bg-gray-400 dark cursor-pointer dark:hover:bg-white hover:bg-gray-800 hover:text-gray-200 dark:hover:text-gray-800 hover:rounded-xl transition-all duration-300 ease-linear rounded-3xl p-5 mt-3"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Page;
