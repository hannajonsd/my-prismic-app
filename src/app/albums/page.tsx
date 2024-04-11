// src/app/[uid]/page.tsx

import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Album } from "../../../components/Album/Album";
import Link from "next/link";

import s from '../../../components/Album/album-styles.module.scss';


type Params = { uid: string };


export default async function AlbumPage({ params }: { params: Params }) {

  const client = createClient();
  const page = await client
    .getByUID("page", "albums")
    .catch(() => notFound());


  // for (const slice of page.data.slices) {
  //   if ('image' in slice.primary) {
  //     console.log(slice.primary.image)
  //     const images = slice.primary.image.url;
  //     const text = slice.primary.text;
  //     // console.log(asText(slice.primary.text))
  //   }
  // }

  return <div>
       <Link href="/albums" className={s.home}>
            <PrismicText field={page.data.title} />
        </Link>
          {page.data.slices.map((slice, index) => {
            const plainText = asText(slice.primary.text); 
            return (
              <Album
                key={index}
                text={plainText}
                // @ts-ignore
                picture={slice.primary.image?.url}
              />
            );
        
        })}
  </div>;
}