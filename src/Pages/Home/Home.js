import "./Home.css"
import {Landing, Services, Gallery, Price, Testimonials, Footer} from '../../sections/index';
import {Container} from '../../components/index';

const Home = () => {
  return (
    <>
    <Landing/>
    <Container>
      <Services/>
      <Gallery/>
      <Price/>
      <Testimonials/>
    </Container>
    <Footer/>
    </>
  )
}

export default Home