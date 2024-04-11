import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";

import styles from "./footer-styles.module.scss";

export async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <PrismicText field={settings.data.site_title} /> &mdash; © 2024 Hanna Margrét Jónsdóttir.
        </div>
      </footer>
    );
  }