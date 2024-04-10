// src/app/[uid]/page.tsx

import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };


export default async function AboutPage({ params }: { params: Params }) {
    console.log(params.uid)
  const client = createClient();
  const page = await client
    .getByUID("page", "about")
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}