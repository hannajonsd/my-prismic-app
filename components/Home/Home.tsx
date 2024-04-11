import React from 'react';
import s from './home-styles.module.scss';


export function Home({ text, picture }: { text: string, picture?: any}) {
    return (
        <div className={s.header}>
            {picture && <img src={picture} alt={'image'} className={s.img} />}
            <p className={s.text}>{text}</p>
        </div>
    );
}