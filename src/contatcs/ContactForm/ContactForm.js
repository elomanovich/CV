import style from '../ContactForm/contactForm.module.css'

export const ContactForm = () => {
    return <div>
        <form className={style.contactForm}>
           <input type={'text'} className={style.inputForm}/>
           <input type={'text'} className={style.inputForm}/>
           <textarea className={`${style.inputForm} ${style.textareaForm}`}/>
           <button>Submit</button>
        </form>
    </div>
}