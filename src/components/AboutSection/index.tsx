import { Children } from "react"
import { Container } from "../Container"
import css from './index.module.css'
import { AboutWrapper } from "../AboutWrapper"
import { Skills } from "../Skills"


export const AboutSection = () => {
    return (
        <section className="wrapper light">
            <Container>
                <AboutWrapper>
                    <div className={css.about}>
                        <h1>About Me</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum facere ipsum, reiciendis vel, culpa eum ea eaque voluptatum labore nobis voluptatibus deserunt cumque possimus! Nam deleniti veritatis fuga officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione praesentium blanditiis voluptates alias. Vero doloremque facere animi, maxime temporibus esse veritatis cupiditate iure ex ipsum enim tempora modi harum!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maiores libero perspiciatis. Incidunt ducimus, voluptatibus explicabo nobis consequatur commodi enim et mollitia nemo illum perferendis officia magni quos velit quaerat?
                        </p>
                    </div>
                    <div className={css.wrapper_skill}>
                        <h1>My Skills</h1>
                        <Skills />
                    </div>
                </AboutWrapper>
                
            </Container>
        </section >
    )
}


