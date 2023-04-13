import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";
import DefaultLayout from "../templates/defaultLayout";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function About({ page }: Props) {
  return (
    <>
      <Head>
        <title>Future Web Application Ltd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <SliceZone slices={page.data.slices} components={components} />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("page");
  return {
    props: {
      page,
    },
  };
}
