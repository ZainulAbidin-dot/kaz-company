import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import StickyNavLayout from './components/StickyNavbar';

const App = () => {
  return (
    <Router>
      <StickyNavLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/history' element={<History />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </StickyNavLayout>
    </Router>
  );
};

export default App;
