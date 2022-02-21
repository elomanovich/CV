import React from "react";
import style from './Portfolio.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";


export const Portfolio = () => {
    return (
        <div className={style.portfolioBlock}>
            <div className={`${styleContainer.container} ${style.portfolioContainer}`}>
                <h2 className={style.title}>My portfolio</h2>
                <div className={style.project}>
                    <Project title={'Calculator'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Project title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                </div>
            </div>
        </div>
    )
}