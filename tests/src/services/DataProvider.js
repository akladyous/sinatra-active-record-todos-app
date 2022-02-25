import React, {useState, useEffect, createContext, useContext} from 'react'
import { useOption } from './OptionProvider.js';

const dataContext = createContext()

export function useData(){
    return useContext(dataContext)
}

export default function DataProvider({children}) {

    const currentOption = useOption()
    const [data, setData] = useState([]);


    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}
