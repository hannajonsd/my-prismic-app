import React from 'react';
import s from './news-styles.module.scss';
import Link from 'next/link';

export function News({ text, link }: { text: string, link: any}) {
    return (
        <div className={s.header}>
            <p className={s.text}>{text}</p>
            <Link href={link} legacyBehavior>
                <a className={s.link}>Read More</a>
            </Link>
        </div>
    );
}
