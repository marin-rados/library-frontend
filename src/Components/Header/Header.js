import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from '../Login/LogoutButton';

export default function Header (){

    return(

        <header>

            <Link className="buttons" to="/">
                <img className='logo' src={'/open-book.png'} alt="Logo" />
            </Link>

            <div className="header-buttons">

                <Link className="buttons" to="/add">
                    Add
                </Link>

                <Link className="buttons" to="/useradministration">
                    User Administration
                </Link>

                <Link className="buttons" to="/myreservations">
                    My Reservations
                </Link>

                <Link className="buttons" to="/allreservations">
                    All Reservations
                </Link>
                

                <LogoutButton className="buttons" />

            </div>

        </header>

    )

}