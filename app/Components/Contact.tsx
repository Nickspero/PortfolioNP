"use client";
import { FaSquareXmark } from "react-icons/fa6";
import { openModal } from "../store/useStore";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const { isOpen, close } = openModal();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);


  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_lr8yc0a",
        "template_1d9uzy8",
        formRef.current,
        "TWMzH2IFMbdgYjekQ",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((err: Error) => {
        setLoading(false);
        console.log(err);
        alert(
          "Email service is temporarily down. Please contact me at nspappas99@gmail.com",
        );
      });
  };

  return (
    <div className={`modal fixed bg-[#ede6d7] flex justify-center items-center top-0 right-0 w-full h-screen transition-opacity duration-600 ${isOpen? "modal__open" : "hidden"} `}>
      <div className="max-w-[900px] w-[80%] h-[70%] p-14 rounded-2xl bg-gradient-to-r from-[#E76F51] to-[#5AA5A6] shadow-2xl relative">
        {!loading && !success && (
          <>
            <h1 className="text-[40px] font-bold">Let's Talk!</h1>
            <h1 className="text-[16px] font-bold">
              I'm currently available to work!
            </h1>
            <form
              ref={formRef}
              onSubmit={submit}
              className="my-6 flex flex-col gap-4"
              action=""
            >
              <div>
                <label>Name:</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>E-Mail:</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" required></textarea>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#ede6d7] mt-2 w-[40%] text-[24px] px-6 py-3 rounded-2xl cursor-pointer hover:scale-105 transform transition duration-300 active:scale-100">
                  Send!
                </button>
              </div>
            </form>
          </>
        )}
        {loading && (
          <div className="flex flex-col w-full h-full justify-center items-center gap-8">
            <AiOutlineLoading3Quarters className="text-[40px] animate-spin" />
            <p className="text-[40px] font-bold">Loading...</p>
          </div>
        )}
        {success && (
          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
            <FaCheckCircle className="text-[40px]" />
            <p className="text-[40px] font-bold">Success!</p>
            <p className="text-[20px]">Speak to you soon!</p>
          </div>
        )}
        <FaSquareXmark
          className="absolute text-[32px] right-4 top-4 cursor-pointer hover:scale-120 transform transition duration-300 active:scale-100"
          onClick={close}
        />
      </div>
    </div>
  );
};

export default Contact;
