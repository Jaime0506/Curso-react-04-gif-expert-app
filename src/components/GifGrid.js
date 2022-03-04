import PropTypes from 'prop-types'

import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export default function GifGrid({ category }) {

    const { loading, data } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Cargando...</p> }

            <div className='card-grid'>
                {
                    data.map( (item) => (
                        <GifGridItem key={item.id} {...item}/>
                    ))
                } 
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}