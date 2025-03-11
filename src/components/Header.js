import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() { 
    return (    
        <header className={styles.Header}>    
            <h1>JM</h1>
            <h2>DIÁRIO PESSOAL</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/emprestimos">Emprestimos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
