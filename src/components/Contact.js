import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useInputReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  // form submission
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs integration
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          toast.success("Your message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );

    // reset values
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  // for animations
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const inputs = [input1Ref, input2Ref, input3Ref, input4Ref];

  useInputReveal(inputs);

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={Contact} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="form-control overflow-hidden">
          <input
            ref={input1Ref}
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            ref={input2Ref}
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>

        <div className="form-control overflow-hidden">
          <textarea
            ref={input3Ref}
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            ref={input4Ref}
            type="submit"
            value="Send message"
            className="uppercase  border py-16 px-28 rounded-full border-white/20  hover:bg-cyan-400 hover:border-cyan-400/20 duration-500 w-full tracking-widest"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
