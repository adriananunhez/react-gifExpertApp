import { useState, useEffect } from 'react';
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { //El useEffect se ejecuta unicamente cuando 'category' cambia
        getGif( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    return state;
}
