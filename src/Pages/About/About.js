import './About.css'
import {Footer, Gallery , Testimonials} from '../../sections/index'
import {Container} from "../../components/index";

const About = () => {
  return (
    <>
    <Container>
      <Gallery/>
    </Container>
    <Testimonials/>
    <Footer/>
    </>
  )
}
export default About