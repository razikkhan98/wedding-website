import logo from './logo.svg';
import './App.css';
import Navbar from './component/common/navbar/navbar';
import Home from './component/pages/home';
import FeatureArea from './component/pages/feature';
import About from './component/pages/about/inder';
import Services from './component/pages/services';
import Gallery from './component/pages/gallery';
import Counter from './component/pages/counter/index'
import Video from './component/pages/video';
import Pricingplan from './component/pages/pricingplan';
import Team from './component/pages/Team';
import Content from './component/pages/contact';
function App() {
  return (
    <>
    <Navbar/>
     <Home/>
    <FeatureArea/>
    <About/>
    <Services/> 
    <Gallery/>
    <Counter/>
    <Video/>
    <Pricingplan/>
    <Team/>
    <Content/>

    </>
  );
}

export default App;
