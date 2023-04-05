import '../styles/Menu.css';

function MenuHeader() {
  return (
    <div className="header">
      <h1 className="topic">Math Magicians</h1>
      <ul className="menu">
        <li className="Menu-icon">Home</li>
        <li className="Menu-icon">Calculator</li>
        <li className="Menu-icon">Quote</li>
      </ul>
    </div>
  );
}

export default MenuHeader;
