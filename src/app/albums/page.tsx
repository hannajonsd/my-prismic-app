// src/app/[uid]/page.tsx

import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Album } from "../../../components/Album";

type Params = { uid: string };


export default async function AlbumPage({ params }: { params: Params }) {
  //console.log(params.uid)
  const client = createClient();
  const page = await client
    .getByUID("page", "albums")
    .catch(() => notFound());

  // console.log(page.data.slices)

  // for (const slice of page.data.slices) {
  //   if ('image' in slice.primary) {
  //     console.log(slice.primary.image)
  //     const images = slice.primary.image.url;
  //     const text = slice.primary.text;
  //     // console.log(asText(slice.primary.text))
  //   }
  // }

  return <div>
  {/* <SliceZone slices={page.data.slices} components={components}/> */}
          {page.data.slices.map((slice, index) => {
          if ('image' in slice.primary) {
            const plainText = asText(slice.primary.text); 
            return (
              <Album
                key={index}
                text={plainText}
                picture={slice.primary.image.url}
                alt={slice.primary.image.alt || 'image of album'}
              />
            );
          }
          return null;
        })}
  </div>;
}