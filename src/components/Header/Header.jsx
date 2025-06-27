import {Link} from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return(
        <div>
           <header>
                <nav className="navbar">
                    <h2 className="text">Vivekanand College</h2>
                    <Link to="/"><b className="text">Home</b></Link>
                    <Link to="/about"><b className="text">About</b></Link>
                    <Link to="/courses"><b className="text">Courses</b></Link>
                    <Link to="/contact"><b className="text">Contact</b></Link>
                    <button className="button"><Link to="/addmission"><b className="text">Apply Now!</b></Link></button>
                </nav>
            </header> 
        </div>
    )
}
export default Header;