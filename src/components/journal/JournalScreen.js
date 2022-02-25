import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
    return (
        <div className='journal__main_content'>
            {/* <h1>Journal Screen</h1> */}
            <Sidebar />  

            <main>
                {/* <h1> Main Content </h1> */}
                {/* <NothingSelected /> */}
                <NoteScreen />
            </main>
        </div>
    );
};
