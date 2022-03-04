import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        getGif(setState, category)
    }, [ category ])
    

    return state
}