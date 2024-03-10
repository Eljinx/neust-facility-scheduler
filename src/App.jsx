import Navbar from './components/Navbar/Navbar';
import Header from '../src/components/Header/Header';
import Content1 from './components/Content1/Content1';
import Content2 from './components/Content2/Content2';
import Upcoming from './components/Upcoming/Upcoming';
import Faculties from './components/Faculties/Faculties';
import Book from './components/Book/Book';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Content1/>
      <Content2/>
      <Upcoming/>
      <Faculties/>
      <Book/>
      <Contact/>
      <Footer/>
      <div class="mobile-message">
        Mobile View Not Available
      </div>
      <div class="tablet-message">
        Tablet View Not Available
      </div>
    </>
  )
}

export default App
