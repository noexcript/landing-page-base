import { ContactForm } from "../ContactForm"
import { Container } from "../Container"
import css from './index.module.css'


export const ContactWrapper = () => {
    return (
        <div className="wrapper">
            <Container>
                <div className={css.form_wrapper}>
                    <h1>Contact me</h1>
                    <ContactForm />
                </div>
            </Container>
        </div>
    )
}