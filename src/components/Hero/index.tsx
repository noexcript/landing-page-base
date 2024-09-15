import { HeroProps } from '../../types/hero'
import { Container } from '../Container'
import css from './index.module.css'

export const Hero = ({ title, text }: HeroProps) => {
    return (
        <section className='wrapper dark'>
            <Container>
                <div className={css.hero}>
                    <h1>
                        {title}
                    </h1>
                    <span>{text}</span>
                </div>
            </Container>
        </section>
    )
}