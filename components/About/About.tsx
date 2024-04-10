import React from 'react';
import s from './about-styles.module.scss';

export function About({ text }: { text: string}) {
    return (
        <div className={s.header}>
            <h2>About Taylor Swift</h2>
            <h1 className={s.text}>{text}</h1>
        </div>
    );
}