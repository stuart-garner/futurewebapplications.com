import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqyjbqn");
  if (state.succeeded) {
    return (
      <div className=" rounded-b-3xl bg-[#4A89BB] px-10 py-20 text-white lg:rounded-3xl lg:p-20">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <h2 className="mb-5 text-4xl font-bold capitalize text-white">
            Thanks for reaching out!
          </h2>
          <p className="m-auto mb-20 max-w-[400px]">
            I will be in touch as soon as I can.
          </p>
          <div className="flex h-full w-full flex-col gap-5 "> </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" rounded-b-3xl bg-[#4A89BB] px-10 py-20 text-white lg:rounded-3xl lg:p-20">
      <h2 className="mb-5 text-4xl font-bold capitalize text-white">
        Come and talk to us!
      </h2>
      <p className="m-auto mb-20 max-w-[400px]">
        We are here to answer your questions, so drop us a line with your
        enquiry and we will be in touch
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex h-full w-full flex-col gap-5 "
      >
        <span className="flex flex-col gap-2">
          <label htmlFor="full-name">Full Name:</label>
          <input
            id="full-name"
            type="text"
            name="name"
            className=" rounded-xl bg-gray-50 p-5 text-gray-600"
            required
          />
          <ValidationError
            prefix="Name"
            field="full-name"
            errors={state.errors}
          />
        </span>

        <span className="flex flex-col gap-2">
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="email"
            name="email"
            className=" rounded-xl bg-gray-50 p-5 text-gray-600"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </span>

        <span className="flex flex-col gap-2">
          <label htmlFor="telephone">Your Phone Number (optional):</label>
          <input
            id="telephone"
            type="telephone"
            name="telephone"
            className=" rounded-xl bg-gray-50 p-5 text-gray-600"
            required
          />
          <ValidationError
            prefix="Telephone"
            field="telephone"
            errors={state.errors}
          />
        </span>

        <span className="flex flex-col gap-2">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            className="min-h-[200px] rounded-xl p-5 text-gray-600"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </span>
        <button
          type="submit"
          style={{ backgroundColor: "#1F508A", color: "#fff" }}
          disabled={state.submitting}
          className="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
