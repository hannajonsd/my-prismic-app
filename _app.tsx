import { createClient } from "@/prismicio";

export async function getStaticProps() {
    const client = createClient();
    const settings = await client.getSingle('settings');
  
    return {
      props: {
        settings: settings.data, 
      },
    };
  }