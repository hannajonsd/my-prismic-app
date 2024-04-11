import React from 'react';
import s from './album-styles.module.scss';
import Image from 'next/image';

export function Album({ text, picture }: { text: string, picture?: any}) {
    return (
        <div className={s.header}>
            <p className={s.text}>{text}</p>
            {picture && <Image src={picture} alt={'image of album'} width={55} height={55} unoptimized={true} className={s.img} />}
        </div>
    );
}