import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <Banner />
      <Card />
      <Button text="Click Me" />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;