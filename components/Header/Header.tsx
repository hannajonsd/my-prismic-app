import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import Link from "next/link";

import styles from "./header-styles.module.scss";

export async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <Link href="/" className={styles.home}>
            <PrismicText field={settings.data.site_title} />
          </Link>
          <nav className="grow">
            <ul className={styles.list}>
              {settings.data.navigation.map((item) => (
                <li key={item.label}>
                  <PrismicNextLink field={item.link}>
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
