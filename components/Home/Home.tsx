import React from 'react';
import s from './home-styles.module.scss';
import Link from 'next/link';

export function Home({ text, picture }: { text: string, picture?: any}) {
    return (
        <div className={s.header}>
            {picture && <img src={picture} alt={'image of album'} className={s.img} />}
            <p className={s.text}>{text}</p>
        </div>
    );
}