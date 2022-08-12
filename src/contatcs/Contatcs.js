import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import {ContactForm} from "./ContactForm/ContactForm";
import style from '../contatcs/contacts.module.css'


export const Contacts = () => {
    return <div className={style.contactBlock}>
        <div className={`${styleContainer.container} ${style.contactContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <div className={style.project}>
                <ContactForm/>
            </div>
        </div>
    </div>
}