import React from 'react';
import s from './about-styles.module.scss';

export function About({ text }: { text: string}) {
    return (
        <div className={s.header}>
            <p className={s.text}>{text}</p>
        </div>
    );
}