import React from "react";
import { TextField } from "./components/TextField"
import { useNavigate } from 'react-router-dom'


const SearchPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Write an adress to capture a webpage:</h1>
            <TextField
                placeholder='https://example.com'
                handleChange={e => { console.log(e) }}
                handleClick={e => { console.log("Klikniete kurba") }}
            />
            <br></br>
            <button onClick={() => navigate("/")}>Go to the list of captured pages</button>
        </div>
    )
}

export default SearchPage;