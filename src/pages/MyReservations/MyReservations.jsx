import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './MyReservations.css';
import '../Body.css';

export default function MyReservations (){

    return(

        <div>

            <Header />

            <div className='body my-reservations'>

                <div className='reservations-content'>
                    <Link to='/myreservations/new'>
                       <button>ADD A NEW RESERVATION</button>
                    </Link>
                    <p>my reservation</p>
                    <p>my reservation</p>
                    <p>my reservation</p>
                    <p>my reservation</p>
                    <p>my reservation</p>
                    <p>my reservation</p>
                </div>

            </div>

            <Footer />

        </div>

    )

}