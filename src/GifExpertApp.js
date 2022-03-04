import React, { useState } from 'react'

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp() {
  
    const [categories, setCategories] = useState(['Rick And Morty'])
    const [valueInput, setValueInput] = useState('Hola mundo')

    const handleInputChange = (e) => {
        setValueInput(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (valueInput.trim().length > 0) {
            if (!(categories.find(item => item === valueInput))) {
                setCategories([valueInput, ...categories])
                setValueInput('')
            }
        }
    }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory 
                handleOnSubmit={handleOnSubmit} 
                handleInputChange={handleInputChange}
                valueInput={valueInput}
            />
            <hr />
            <button onClick={ handleOnSubmit }>Agregar</button>
            
            <ol>
                {
                    categories.map((item) => (
                        <GifGrid category={item} key={item}/>
                    ))
                }
            </ol>

            
        </div>
    )
}
