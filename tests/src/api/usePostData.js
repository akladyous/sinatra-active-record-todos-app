
import {useState} from 'react'

export default function usePostData(path, json_obj) {

    const [data, setData] = useState(null);
    setData(json_obj)
    const url = new URL("http://localhost");
    url.port = 9292;
    url.pathname = path;

    fetch(url, {
        method: "POST",
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

    return data
}
