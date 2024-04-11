import React from 'react';
import s from './about-styles.module.scss';

export function About({ text, picture }: { text: string, picture?: any}) {
    return (
        <div className={s.header}>
            <p className={s.text}>{text}</p>
            {picture && <img src={picture} alt={'image of album'} className={s.img} />}
        </div>
    );
}