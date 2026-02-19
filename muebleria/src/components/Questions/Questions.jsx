import React from 'react';
import s from "./Questions.module.css";

const Questions = () => {
    return (
        <div className={s.container}>
            <div className={s.questionsWrap}>
                <p className={s.title}>Часті запитання</p>
                <p className={s.question}>Які меблі найпопулярніші?</p>
                <p className={s.answer}>Найпопулярнішими є меблі з деревини та меблі з сучасним дизайном.</p>
            </div>
        </div>
    );
}

export default Questions;
