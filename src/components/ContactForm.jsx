 import React, { useState } from "react";
import { sendContactForm } from "../utils/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message)
      return setStatus("Please fill all fields.");
    if (!validateEmail(form.email))
      return setStatus("Invalid email format.");

    try {
      const res = await sendContactForm(form);
      if (res.status === 200 || res.status === 201) {
        setStatus("Form Submitted ✅");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else setStatus("Something went wrong ❌");
    } catch {
      setStatus("Submission failed ❌");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-[#FFF5EE] bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('/pattern-top-right.png'), url('/pattern-bottom-left.png')",
        backgroundPosition: "top right, bottom left",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "450px, 450px",
      }}
    >
      {/* ===== Main Section ===== */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center flex-grow p-6 md:p-12 gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left text-gray-800 max-w-md">
          <h1 className="text-4xl font-bold text-[#FF6600] mb-6">V Films</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you have an idea, a question, or simply want to explore how
            V can work with you — we’re just a message away. Let’s catch up over
            coffee ☕.
            <br />
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* Right Form Box */}
        <div className="md:w-1/2 bg-white bg-opacity-80 border-2 border-[#FF6600] rounded-xl shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-2">
            Join the Story
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message*"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-medium py-3 px-6 rounded-full w-full transition-all duration-200"
            >
              Submit
            </button>

            {status && (
              <p className="mt-3 text-center text-gray-700 font-medium">{status}</p>
            )}
          </form>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="text-center text-sm text-gray-700 py-6 relative z-10">
        <p>
          <a
            href="mailto:vernita@vamanfilms.co.in"
            className="text-[#FF6600] font-semibold"
          >
            vernita@vamanfilms.co.in
          </a>{" "}
          |{" "}
          <span className="text-[#FF6600] font-semibold">+91 98736 84567</span>
        </p>
      </footer>
    </div>
  );
}
