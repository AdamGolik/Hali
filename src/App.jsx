// App.jsx
import './index.css';
import { Navbar } from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Oferts } from './pages/Oferts';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App = () => (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Oferts" element={<Oferts />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
);

export default App;
