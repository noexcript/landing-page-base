import { FormEvent } from 'react'
import { Input } from '../Input'
import css from './index.module.css'

export const ContactForm = () => {


    const handlerForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={css.form_contact} onSubmit={handlerForm} method='post' >
            <div className={css.input_group}>
                <Input type='text' label='Name' name='name' placeholder='Your name' />
                <Input type='email' label='E-mail' name='email' placeholder='email@example.com' />
            </div>
            <div className={css.input_group}>
                <Input type='text' label='Message' name='message' placeholder='Hello my name is...' />
            </div>
            <button className={css.btn_form} type='submit'>Send message</button>
        </form>
    )
}