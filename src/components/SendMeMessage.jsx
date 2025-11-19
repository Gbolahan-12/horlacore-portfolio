import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function SendMeMessage() {
  const [state, handleSubmit] = useForm("xrbjpwew");

  // State for showing the success alert
  const [showAlert, setShowAlert] = useState(false);

  // When form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setShowAlert(true);

      // Hide alert after 3 seconds
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="relative">
      
      {showAlert && (
        <p className="absolute top-10 right-0 bg-green-600 text-white px-4 py-2 rounded shadow-md animate-fade-in">
          Your Message Has Been Successfully Sent!
        </p>
      )}

      <div className="bg-secondary p-6 md:p-8 rounded-xl shadow-lg">
        <h3 className="text-xl text-soft font-semibold mb-4">
          Send Me a Message
        </h3>

        <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4">
          <input
            type="text"
            required
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-dark text-soft outline-none border border-accent/20 focus:border-accent"
          />

          <input
            type="email"
            required
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-dark text-soft outline-none border border-accent/20 focus:border-accent"
          />

          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-dark text-soft outline-none border border-accent/20 focus:border-accent"
          ></textarea>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-accent text-white py-3 rounded font-semibold hover:opacity-90 transition-all hover:cursor-pointer"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
