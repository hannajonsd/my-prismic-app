// src/app/page.tsx

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Home } from "../../components/Home/Home";



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
  
  return <div>
    {page.data.slices.map((slice, index) => {
      if ('image' in slice.primary) {
        const plainText = asText(slice.primary.text); 
        return (
          <Home
            key={index}
            picture={slice.primary.image.url}
            text={plainText}
          />
        );
      }
      return null;
    })}
    </div>
  ;
}
