import ContactForm from "../contactForm";
import SocialLinks from "../socialLinks";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-center gap-10 pb-0 pt-20 text-gray-400"
    >
      <motion.div
        className="container px-0 text-center text-gray-400 lg:w-[60%] lg:px-10"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          repeat: 0,
          duration: 1,
          delay: 0,
        }}
      >
        <ContactForm />
      </motion.div>

      <div className="container flex flex-col justify-start gap-20 py-28 xl:flex-row">
        <div className="flex basis-1/2 flex-col gap-5">
          <h4>About Us</h4>
          <hr />
          <p>
            We are a group of passionate seasoned technology evangelists. With
            over 12 years experience we are dedicated to making the web and
            mobile technology accessible to all.
          </p>
        </div>
        <div className="flex basis-1/2 flex-col gap-5">
          <h4>Contact Info</h4>
          <hr />
          <p>enquiries@futurewebapplications.com</p>
          <p>Epsom, Surrey. UK</p>
          <h4>Socialise</h4>
          <hr />
          <SocialLinks colour="fill-gray-500" />
        </div>
      </div>

      <div className="h-full w-full bg-[#1F2225] py-10 text-center text-gray-400">
        Copyright © Future Web Applications Ltd {new Date().getFullYear()}. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
