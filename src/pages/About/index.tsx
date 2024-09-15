import { AboutWrapper } from "../../components/AboutWrapper";
import { ButtonLink } from "../../components/Button";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import css from './index.module.css'


export default function About() {
    return (
        <>
            <Hero title="ABOUT ME" text="IT'S A-ME. NOAH!" />
            <Container>
                <AboutWrapper>
                    <div className={css.about}>
                        <h1>My Background</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum facere ipsum, reiciendis vel, culpa eum ea eaque voluptatum labore nobis voluptatibus deserunt cumque possimus! Nam deleniti veritatis fuga officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione praesentium blanditiis voluptates alias. Vero doloremque facere animi, maxime temporibus esse veritatis cupiditate iure ex ipsum enim tempora modi harum!

                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maiores libero perspiciatis. Incidunt ducimus, voluptatibus explicabo nobis consequatur commodi enim et mollitia nemo illum perferendis officia magni quos velit quaerat?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum facere ipsum, reiciendis vel, culpa eum ea eaque voluptatum labore nobis voluptatibus deserunt cumque possimus! Nam deleniti veritatis fuga officiis.

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maiores libero perspiciatis. Incidunt ducimus, voluptatibus explicabo nobis consequatur commodi enim et mollitia nemo illum perferendis officia magni quos velit quaerat?
                        </p>
                    </div>
                    <div className={css.about}>
                        <h1>My Hobbies and Interests</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum facere ipsum, reiciendis vel, culpa eum ea eaque voluptatum labore nobis voluptatibus deserunt cumque possimus! Nam deleniti veritatis fuga officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione praesentium blanditiis voluptates alias. Vero doloremque facere animi, maxime temporibus esse veritatis cupiditate iure ex ipsum enim tempora modi harum!

                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maiores libero perspiciatis. Incidunt ducimus, voluptatibus explicabo nobis consequatur commodi enim et mollitia nemo illum perferendis officia magni quos velit quaerat?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum facere ipsum, reiciendis vel, culpa eum ea eaque voluptatum labore nobis voluptatibus deserunt cumque possimus! Nam deleniti veritatis fuga officiis.

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maiores libero perspiciatis. Incidunt ducimus, voluptatibus explicabo nobis consequatur commodi enim et mollitia nemo illum perferendis officia magni quos velit quaerat?
                        </p>
                    </div>

                </AboutWrapper>
                < div className='btn_links'>
                    <ButtonLink url="contact" label="Contact me" />
                </div>
            </Container>
        </>
    )
}