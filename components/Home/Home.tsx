import React from 'react';
import s from './home-styles.module.scss';

export function Home({ text, picture }: { text: string, picture: any}) {
    return (
        <div className={s.header}>
            <img src={picture} alt={'image of album'} className={s.img}></img>
            <h1 className={s.text}>{text}</h1>
        </div>
    );
}