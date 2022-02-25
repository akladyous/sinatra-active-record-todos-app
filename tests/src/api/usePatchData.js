import { useState, useEffect } from "react";

export default function usePatchData(url, json_obj) {

    const [trigger, setTrigger] = useState(false);
    const [data, setData] = useState(null);

    useEffect( () =>{
        fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json_obj)
    })
        .then((res) => res.json())
        .then((record) => {
            // console.log(record);
            setData(record);
        })
        .catch((err) => {
            console.error(err);
        });
    }, [url])

    return data
}
