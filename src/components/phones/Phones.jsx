import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phone, setPhone] = useState([]);
    useEffect(() => { 
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(Response => Response.json())
        // .then(data=>setPhone(data.data))
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(data => setPhone(data.data.data))
        
    },[])
    return (
        <div>
            <h1 className="text-7xl bg-green-500 text-black rounded-lg hover:bg-purple-700">Phone:{phone.length} </h1>
        </div>
    );
};

export default Phones;