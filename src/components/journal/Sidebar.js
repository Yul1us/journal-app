import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log('Click Logout')
        dispatch ( startLogout () )
    }

    return (
        // <div>Sidebar</div>
        // Barra de manu lateral
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    {/* Clases de: https://cdnjs.com/libraries/font-awesome */}
                    <i className='far fa-moon'></i>
                    <span> Julio </span>
                </h3>

                <button 
                    className='btn'
                    onClick= { handleLogout }
                >
                    Logout
                </button>
            </div>

            <div className='journal__new_entry'>
                 {/* Clases de: https://cdnjs.com/libraries/font-awesome */}
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>New entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
