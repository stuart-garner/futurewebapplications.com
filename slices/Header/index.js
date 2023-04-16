import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Image from "next/image";
import HeaderBlob from "../../components/blobs/HeaderBlob";
import { motion } from "framer-motion";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
const ANIMATION_DURATION = 0.25;
const Header = ({ slice }) => (
  <section className="mt-[160px] py-20">
    <div className=" container relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
      <motion.span
        className="absolute -left-5 -top-0 z-[-1] block w-[700px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          repeat: 0,
          duration: ANIMATION_DURATION,
          delay: 0,
        }}
      >
        <HeaderBlob />
      </motion.span>
      <div className="flex basis-5/12 flex-col gap-5">
        <motion.h1
          className="capitalize"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0,
          }}
        >
          {slice.primary.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0.25,
          }}
        >
          {slice.primary.sub_text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0.25,
          }}
        >
          <PrismicRichText field={slice.primary.description} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0.5,
          }}
        >
          <Link
            className="button flex gap-2 align-middle"
            style={{ backgroundColor: slice.primary.cta_button_colour }}
            href={slice.primary.cta_button_link.url}
          >
            <span className="align-middle capitalize">
              {slice.primary.cta_button_text}
            </span>
            <span className="material-symbols-outlined">mail</span>
          </Link>
        </motion.div>
      </div>
      <div className="basis-6/12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0.25,
          }}
        >
          <Image
            src={slice.primary.section_image.url}
            alt={slice.primary.section_image.alt}
            width={800}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Header;
