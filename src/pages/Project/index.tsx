import { ButtonLink } from "../../components/Button";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";

export default function Project() {
    return (
        <>
            <Hero title="MY PROJECTS" text="MAKE WITH LOVE ❤️" />
            <Container>
                <Projects count={9} />
                <div className='btn_links'>
                    <ButtonLink url="contact" label="Contact me" />
                </div>
            </Container>
        </>
    )
}
