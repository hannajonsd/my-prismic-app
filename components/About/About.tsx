import React from 'react';
import Image from 'next/image';
import s from './about-styles.module.scss';

export function About({ text, picture }: { text: string, picture?: any}) {
    return (
        <div className={s.header}>
            <h1 className={s.title}>{text}</h1> 
            {picture && <Image src={picture} alt={'image'} width={55} height={55} className={s.img} />}
        </div>
    );
}