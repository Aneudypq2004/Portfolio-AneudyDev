import React, { ChangeEvent, FormEvent, useState } from "react"
import { SendIcon } from "../helper/Icons";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

function Contact() {

  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);

  const {t} = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (email.trim() == "" || fullName.trim() == "" || message.trim() == "") {
      return toast.error(t("Contact.validate.all"));
    }

    if (message.trim().length < 20) {
      return toast.error(t("Contact.validate.all"));
    }

    // validate email

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(email)) {
      return toast.error(t("Contact.validate.all"));
    }

    toast.success(t("Contact.Mreceived"));

    setSend(true);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow shadow-white  text-white w-full flex flex-col
     bg-second rounded">

      <fieldset className="grid grid-cols-2 w-full gap-4">

        <input
          className="p-4  rounded bg-transparent border border-gray-300 w-full outline-none 
         focus:border-blue"
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
          placeholder={t("Contact.fullname")} />

        <input
          className="p-4 rounded bg-transparent border border-gray-300 w-full outline-none 
         focus:border-blue"
          type="email"
          name="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder={t("Contact.email")} />

        <textarea
          className="p-4 col-span-2 rounded bg-transparent border h-[10rem] border-gray-300 
        w-full outline-none  focus:border-blue"
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          name="message" placeholder={t("Contact.message")} >

        </textarea>

      </fieldset>

      <button
        className={` mt-4 self-end  px-4 py-2 rounded-sm text-black text-lg 
        flex items-center  gap-4 max-w-max ${send ? 'bg-green-500' : 'bg-blue'}`}
        type="submit"><SendIcon /> {send ? t("Contact.Received") : t("Contact.send") }</button>

    </form>
  )
}


export default Contact