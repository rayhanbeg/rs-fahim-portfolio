import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Correct import from @emailjs/browser
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare the form data
    const formData = new FormData(form.current);

    // Map the data to match your email template placeholders
    const emailParams = {
      user_name: formData.get("name"),
      user_email: formData.get("email"),
      message: formData.get("message"),
    };

    emailjs
      .send("service_hqe51cv", "template_maws1xi", emailParams, "BoQ3XseuG4NatS_7A")
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-center",
            duration: 4000,
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again.", {
            position: "top-center",
            duration: 4000,
          });
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className=" text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Connect
            </h3>
            <p>
              I'm a 12th-grade student at Alhaz Mockbul Hossain College, eager
              to connect with classmates, teachers, or anyone looking to share
              knowledge or guidance.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:rsfahim8854@gmail.com"
                className="hover:underline"
              >
                rsfahim8854@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+8801960851432, +8801960851433, +8801600725986</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Alhaz Mockbul Hossain College, Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
