import React from 'react'
import PropsTypes from 'prop-types'

export default function AddCategory({ valueInput, handleInputChange, handleOnSubmit }) {

        return (
        <form onSubmit={ handleOnSubmit }>
            <input 
                type="text" 
                value={valueInput}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    handleInputChange: PropsTypes.func.isRequired,
    handleOnSubmit: PropsTypes.func.isRequired,
    valueInput: PropsTypes.string.isRequired
}

