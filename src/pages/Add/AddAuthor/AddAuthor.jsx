import React from 'react';
import '../../Body.css';
import './AddAuthor.css';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

export default function AddAuthor (){

    return(

        <div>

            <Header />

            <div className='body add-author'>

                <div className='add-author-content edit-inputs'>

                    <p>Add new author</p>

                    <input className='add-author-inputs' type="text" placeholder='First Name' />

                    <input className='add-author-inputs' type="text" placeholder='Last Name' />

                    <label className='add-author-labels' for="dateofbirth">Date of Birth:</label>
                    <input className='add-author-inputs' type="date" id="dateofbirth" name="dateofbirth" placeholder='Date of Birth' />

                    <label className='add-author-labels' for="dateofdeath">Date of Death:</label>
                    <input className='add-author-inputs' type="date" id="dateofdeath" name="dateofdeath" placeholder='Date of Death' />

                    <input className='add-author-inputs' type="text" placeholder='Nationality' />
                        
                    <div className='add-author-buttons-container edit-buttons'>
                        <button className='add-author-buttons'>Edit</button>
                        <button className='add-author-buttons'>Save Changes</button>
                        <button className='add-author-buttons'>Add</button>
                    </div>

                </div>

            </div>

            <Footer />

        </div>

    )

}