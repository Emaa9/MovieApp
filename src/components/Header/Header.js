import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header =() =>{
    return(
        <div className='header'>
            <Link className='link' to="/">
                <div className='logo'>Movie App</div>
                </Link>
                <nav>
                    <ul>
                        <li className='list'>
                            <Link className="link2" to="/movie">
                            <div className='movies2'>Movies</div>
                            </Link>
                            <Link className="link2" to="/show">
                                <div className='shows2'>Shows</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            
        </div>
    );
};

export default Header;