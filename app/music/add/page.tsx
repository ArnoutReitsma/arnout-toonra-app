"use client";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import { addSong } from "./AddSong";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

export default function PageAdd() {
  async function onSubmit(formData: FormData) {
    const res = await addSong(formData);
    setMessage(res.message);
    setKey(prevKey => prevKey+1);
  }
  const [toastMessage, setMessage] = useState<string>("");
  const [key, setKey] = useState<number>(0);
  useEffect(() => {
    if (toastMessage) {
      console.log(toastMessage);
      toast(toastMessage, {
        hideProgressBar: true,
        autoClose: 2000,
        position: "bottom-center",
      });
    }
  }, [toastMessage, key]);
  return (
    <div>
      <form
        action={onSubmit}
        className="flex flex-col items-center p-6 md:p-12"
      >
        <h1>Add new Toonra track!</h1>
        <p>Title*:</p>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Url*:</p>
        <input
          type="text"
          placeholder="Url"
          name="url"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Genre:</p>
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Album:</p>
        <input
          type="text"
          placeholder="Album"
          name="album"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Cover url:</p>
        <input
          type="text"
          placeholder="Cover"
          name="coverUrl"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
        />
        <p>Order*:</p>
        <input
          type="number"
          defaultValue={0}
          placeholder="Order"
          name="order"
          className="border border-gray-300 p-2 rounded-md text-black"
          size={100}
          required
        />
        <br />
        <br />
        <input
          type="submit"
          value="submit"
          className="border border-gray-300 p-2 rounded-md hover:bg-slate-500"
          id="submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
}
