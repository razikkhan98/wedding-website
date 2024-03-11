import logo from './logo.svg';
import './App.css';
import Navbar from './component/common/navbar/navbar';
import Home from './component/pages/home';
import About from './component/pages/about/inder';
import Services from './component/pages/services';
import Gallery from './component/pages/gallery';
import FeatureArea from './component/pages/feature';
import Video from './component/pages/video';
import Counter from './component/pages/counter/index';
import Pricingplan from './component/pages/pricingplan';
import Team from './component/pages/Team';
import Content from './component/pages/contact';
import Testimonial from './component/pages/testimonial';
import Blog from './component/pages/blogs';
import Instagram from './component/pages/instagram';
import Footer from './component/pages/footer';
function App() {
  return (
    <>
    <Navbar/>
     <Home/>
    <About/>
    <Services/> 
    <Gallery/>
    <FeatureArea/>
    <Video/>
    <Counter/>
    <Pricingplan/>
    <Team/>
    <Content/>
    <Testimonial/>
    <Blog/>
    <Instagram/>
    <Footer/>

    </>

  );
}

export default App;
