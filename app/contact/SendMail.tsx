"use server";
import { sendMail } from "@/service/mailService";

export async function submitMail(e: FormData) {
    const name = e.get("name").toString();
    const email = e.get("email").toString();
    const message = e.get("message").toString();
    try {
      await sendMail(
        `Message from arnoutreitsma.dev - from "${name}"`,
        "arnout.reitsma@gmail.com",
        `Recieved message from "${name}", email: "${email}" 
Message: 
"${message}"`
      );
      return { message: "Success send message" };
    } catch (e) {
      return { message: "Failed sending message" };
    }
  }