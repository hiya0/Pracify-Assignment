import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { WelcomePage } from './Components/WelcomePage/WelcomePage';
import { ImageText } from './Components/ImageText/ImageText';
import { Blog } from './Components/Blog/Blog';
import { Footer } from './Components/Footer/Footer'

const App= () => {
  return (
    <div className="App">
        <Navbar/>
        <LandingPage/>
        <WelcomePage/>
        <ImageText/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
