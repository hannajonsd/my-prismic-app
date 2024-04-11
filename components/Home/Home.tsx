import React from 'react';
import s from './home-styles.module.scss';
import Image from 'next/image';


export function Home({ text, picture }: { text: string, picture?: any}) {
    return (
        <div className={s.header}>
            {picture && <Image src={picture} alt={'image'} width={55} height={55} className={s.img} />}
            <p className={s.text}>{text}</p>
        </div>
    );
}