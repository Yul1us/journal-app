import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'> 
        {/* NoteScreen */}

        <NoteAppBar />

        <div className='notes__content'>
            <input
                className='notes__title-input'
                type='text'
                placeholder='Some awersome title'
                autoComplete='off'
            />
            <textarea
                placeholder='What happened today'
                className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
                <img 
                    // src='https://static5.depositphotos.com/1013513/502/i/950/depositphotos_5021225-stock-photo-beautiful-morning-at-spring-before.jpg'
                    src='https://cdn.photography-secret.com/1943706/These_Inspiring_Landscape_Photographers_will_Make_You_Want_to_Take_Better_Photos_2.jpg.webp'
                    alt='Imagen'
                />

            </div>

        </div>
    </div>
  )
}
