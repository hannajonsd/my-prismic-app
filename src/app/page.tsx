// src/app/page.tsx

import { asText } from "@prismicio/client";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Home } from "../../components/Home/Home";
import Link from "next/link";

import s from '../../components/Home/home-styles.module.scss';

// export async function generateMetadata() {
//   const client = createClient();
//   const page = await client.getSingle("homepage");

//   return {
//     title: asText(page.data.title),
//     description: page.data.meta_description,
//   };
// }

export default async function HomePage() {
  const client = createClient();
  const page = await client.getSingle("homepage");


  // for (const slice of page.data.slices) {
  //     console.log(slice.primary.text);
  // }
  
  return (
    <div>
      <Link href="/home" className={s.home}>
        <PrismicText field={page.data.title} />
      </Link>
      {page.data.slices.map((slice, index) => {
        const plainText = asText(slice.primary.text); 
        return (
          <Home
            key={index}
            // @ts-ignore
            picture={slice.primary.image?.url}
            text={plainText}
          />
        );
      })}
    </div>
  );
}
