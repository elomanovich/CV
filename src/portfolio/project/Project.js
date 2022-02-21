import React from "react";
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                {props.picture}
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.description}>
                <span>{props.title}</span>
                <div>{props.description}</div>
            </div>
        </div>
    )
}