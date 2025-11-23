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
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="glass p-8 md:p-10 rounded-3xl animate-slide-up">
          <form action={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  className="contact-input"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  className="contact-input"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                className="contact-input resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default Page;
