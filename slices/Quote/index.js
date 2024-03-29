import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * @typedef {import("@prismicio/client").Content.QuoteSlice} QuoteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuoteSlice>} QuoteProps
 * @param { QuoteProps }
 */

const ANIMATION_DURATION = 0.25;
const Quote = ({ slice }) => (
  <section className="py-28 lg:py-48">
    <div className="container flex flex-col justify-center lg:flex-row">
      <div className="flex flex-col gap-5 lg:max-w-[60%]">
        <motion.blockquote
          className="text-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0,
          }}
        >
          {slice.primary.quote}
        </motion.blockquote>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0.25,
          }}
        >
          <PrismicRichText field={slice.primary.description} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Quote;
