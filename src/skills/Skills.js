import React from "react";
import style from './skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'I love JS'}/>
                    <Skill title={'CSS'} description={'I love CSS'}/>
                    <Skill title={'React'} description={'I love React'}/>
                </div>
            </div>
        </div>
    )
}