import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './styles/Menu.css';

import HomePage from './components/Home';
import Calculator from './components/Calculator';
import DisplayQuotes from './components/Quote';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1 className="topic"><Link className="topic2" to="/">Math Magicians</Link></h1>
        <ul className="menu">
          <li className="Menu-icon">
            <Link to="/">Home</Link>
          </li>
          <li className="Menu-icon">
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li className="Menu-icon">
            <Link to="/DisplayQuotes">Quote</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/DisplayQuotes" element={<DisplayQuotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
