// src/app/[uid]/page.tsx

import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Album } from "./.../../../../../components/Album/Album";

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