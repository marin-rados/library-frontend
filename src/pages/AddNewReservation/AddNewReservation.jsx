import React from 'react';
import '../Body.css';
import './AddNewReservation.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function AddNewReservation (){

    return(

        <div>

            <Header />

            <div className='body add-new-reservation'>

                <div className='add-new-reservation-content'>

                    <p>New Reservation</p>

                   <input className='add-new-reservation-inputs' type="text" placeholder='Publication Id'/>

                   <label className='add-new-reservation-labels' for="enddate">Start Date:</label>
                   <input className='add-new-reservation-inputs' type="date" id="startdate" name="startdate" placeholder='Start Date' />

                    <label className='add-new-reservation-labels' for="enddate">End Date:</label>
                    <input className='add-new-reservation-inputs' type="date" id="enddate" name="enddate" placeholder='End Date' />

                    <div className='add-new-reservation-buttons-container   '>
                        <button className='add-new-reservation-buttons'>Cancel</button>
                        <button className='add-new-reservation-buttons'>Confirm</button>
                    </div>
                </div>

            </div>

            <Footer />

        </div>

    )

}