import React from 'react';
import s from './album-styles.module.scss';

export function Album({ text, picture, alt }: { text: string, picture: any, alt: string}) {
    return (
        <div className={s.header}>
            <h1 className={s.text}>{text}</h1>
            <img src={picture} alt={'image of album'} className={s.img}></img>
        </div>
    );
}