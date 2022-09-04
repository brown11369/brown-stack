import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='work' element={<Work />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
