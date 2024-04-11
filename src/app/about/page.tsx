// src/app/[uid]/page.tsx

import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { About } from "../../../components/About/About";
import Link from "next/link";

import s from '../../../components/About/about-styles.module.scss';

type Params = { uid: string };

export default async function AboutPage({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", "about")
    .catch(() => notFound());

  return <div>
        <Link href="/about" className={s.home}>
            <PrismicText field={page.data.title} />
        </Link>
        {page.data.slices.map((slice, index) => {
            const plainText = asText(slice.primary.text); 
            return (
              <About
                key={index}
                text={plainText}
                // @ts-ignore
                picture={slice.primary.image?.url}
              />
            );
        })}
    </div>
  ;
}
