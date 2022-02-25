import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        {/* JournalEntry */}
        <div 
            className='journal__entry-picture'
            style={{
                // https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png
                //https://transformtheworldartistically.files.wordpress.com/2013/11/stalpob.jpg
                //https://transformtheworldartistically.files.wordpress.com/2013/11/am_79225_5660160_932142.jpg?w=988&h=741
                backgroundSize: 'cover',
                backgroundImage: 'url(https://transformtheworldartistically.files.wordpress.com/2013/11/stalpob.jpg)'
            }}
        >
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo dia
            </p>
            <p className='journal__entry-content'>
                Algo por aca...
                Reprehenderit in quis quis dolor consequat magna irure esse magna sit nostrud.

            </p>
        </div>

        <div className='journal__entrydate-box'>
            <span>Monday</span>
            <h4>28</h4>

        </div>
    </div>
  )
}
