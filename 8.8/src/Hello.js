import React from "react";
import study from './study.png';
import css from './Hello.css';

export default function Hello(){
    return (<div className={css.Hello}>공부 시러요<img src={study} alt=""/></div>)
}