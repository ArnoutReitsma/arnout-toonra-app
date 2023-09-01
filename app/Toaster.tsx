"use client";

import React, { useEffect } from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";

export interface Toast {
  message: string;
  options: ToastOptions;
}
function Toaster(pushToast: Toast) {
  useEffect(() => {
    toast(pushToast.message, pushToast.options);
  });
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toaster;
