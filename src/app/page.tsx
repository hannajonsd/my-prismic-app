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


  // for (const slice of page.data.slices) {
  //     console.log(slice.primary.text);
  // }
  
  return (
    <div>
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
