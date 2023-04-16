import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftBlob from "../../components/blobs/LeftBlob";
import RightBlob from "../../components/blobs/RightBlob";

/**
 * @typedef {import("@prismicio/client").Content.SectionSlice} SectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionSlice>} SectionProps
 * @param { SectionProps }
 */

const ANIMATION_DURATION = 0.25;

const Section = ({ slice }) => (
  <section className="py-28 lg:px-28 lg:py-28">
    <motion.span
      className={`absolute top-0 ${
        slice.primary.image_left ? "right-0" : "left-0"
      }  z-[-1] block w-[50%]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      transition={{
        repeat: 0,
        duration: ANIMATION_DURATION,
        delay: 0,
      }}
    >
      {slice.primary.image_left ? <RightBlob /> : <LeftBlob />}
    </motion.span>

    <div
      className={`container flex flex-col gap-20 lg:px-[200px] ${
        slice.primary.image_left ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col gap-5 lg:basis-1/2 ">
        <motion.h2
          initial={
            slice.primary.image_left
              ? { opacity: 0, x: 50 }
              : { opacity: 0, x: -50 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0,
          }}
        >
          {slice.primary.sub_title}
        </motion.h2>

        <motion.h3
          initial={
            slice.primary.image_left
              ? { opacity: 0, x: 50 }
              : { opacity: 0, x: -50 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            repeat: 0,
            duration: ANIMATION_DURATION,
            delay: 0.25,
          }}
        >
          {slice.primary.title}
        </motion.h3>

        <motion.span
          initial={
            slice.primary.image_left
              ? { opacity: 0, x: 50 }
              : { opacity: 0, x: -50 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            repeat: 0,
            duration: 0.25,
            delay: 0.5,
          }}
        >
          <PrismicRichText field={slice.primary.description} />
        </motion.span>

        {slice.primary.cta_button_colour && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              repeat: 0,
              duration: ANIMATION_DURATION,
              delay: 0.75,
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
              <span className="material-symbols-outlined">local_library</span>
            </Link>
          </motion.div>
        )}
      </div>
      <div className="lg:basis-1/2">
        <motion.div
          initial={
            slice.primary.image_left
              ? { opacity: 0, x: -50 }
              : { opacity: 0, x: 50 }
          }
          whileInView={{ opacity: 1, x: 0 }}
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

export default Section;
