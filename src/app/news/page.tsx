// src/app/[uid]/page.tsx

import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import Link from "next/link";

import s from '../../../components/News/news-styles.module.scss';
import { News } from "../../../components/News/News";


type Params = { uid: string };


export default async function NewsPage({ params }: { params: Params }) {

  const client = createClient();
  const page = await client
    .getByUID("page", "news")
    .catch(() => notFound());


  return <div>
       <Link href="/news" className={s.home}>
            <PrismicText field={page.data.title} />
        </Link>
          {page.data.slices.map((slice, index) => {
            const plainText = asText(slice.primary.text); 
            return (
              <News
                key={index}
                text={plainText}
                // @ts-ignore
                link={slice.primary.link?.url}
              />
            );
        
        })}
  </div>;
}