"use server";
import sendEmail from "@/app/libs/email";
import { redirect } from "next/navigation";

async function submitContact(data: FormData) {
  const firstName = data.get("firstName")?.valueOf();
  const lastName = data.get("lastName")?.valueOf();
  const phone = data.get("phone")?.valueOf();
  const email = data.get("email")?.valueOf();
  const message = data.get("message")?.valueOf();

  if (typeof firstName !== "string" || firstName.length === 0) {
    throw new Error("Invalid First Name");
  }
  if (typeof lastName !== "string" || lastName.length === 0) {
    throw new Error("Invalid Last Name");
  }
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("Invalid Email");
  }
  if (typeof phone !== "string" || phone.length === 0) {
    throw new Error("Invalid Phone Number");
  }
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Invalid Message");
  }

  await sendEmail({
    to: "info@bowenpaincenter.com",
    subject: "Bowen Pain Center New Patient",
    text: `Name: ${firstName} ${lastName} Phone: ${phone} Email: ${email} Message: ${message}`,
  });
  redirect("/");
}

export default submitContact;
