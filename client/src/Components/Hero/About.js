import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      // Send data to your form handler endpoint
      await axios.post("https://getform.io/f/azyldpdb", userInfo);

      // Send email using emailjs
      await emailjs.sendForm('mr_hacker', 'mr_hacker', form.current, 'CMKdlYIQPJz80Fxim');

      toast.success("Your message has been sent");

      // Show the success popup and reload the page after a delay
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 my-16">
      <h1 className="text-4xl font-extrabold text-gradient mb-3 text-center">Contact Me</h1>
      <p className="text-lg text-gray-500 mb-4 text-center">
        Feel free to reach out by filling out the form below.
      </p>
      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg w-full max-w-lg px-8 py-10 rounded-xl border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Send Your Message
          </h2>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required" })}
              className="shadow-sm border rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="shadow-sm border rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="shadow-sm border rounded-lg py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-black rounded-lg py-3 px-6 w-full mt-4 shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-green-600 text-lg">Form submitted successfully!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
