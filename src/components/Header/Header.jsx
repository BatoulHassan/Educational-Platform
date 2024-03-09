import Head from '../Head/Head';
import Navbar from '../Navbar/Navbar';
import './HeaderStyle.css';

const Header = () => {
  return (
    <div className="header">
        <Head />
        <Navbar />
    </div>
  )
}

export default Header