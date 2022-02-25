// custom Hook api
import {useState, useEffect, useContext} from 'react'
import { endPointContext } from "../services/OptionProvider.js";

export const useGetData = (path) => {

    const endPoint = useContext(endPointContext);
    const url = new URL("http://localhost");
    url.port = 9292;
    url.pathname = path;
    const [data, setData] = useState([]);

    useEffect(() => {
        if(path){
            fetch(url)
                .then((res) => res.json())
                .then((todos) => {
                    console.log(todos);
                    setData(todos);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [endPoint]);

    return data;
};

