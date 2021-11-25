import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Fab, Paper } from "@mui/material";
import { CustomTextField } from "./components/TextField";
import webpageAPI from "../api/WebpageAPI";
import withAppBar from "./utils/withAppBar";

const SearchPage: React.FC = () => {
    const navigate = useNavigate()
    const [webpage, setWebpage] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setWebpage(event.target.value);

    const handleClick = async () => {       
        const name: string = webpage.split('/')[2]
        const response = await webpageAPI.addWebpage(name, webpage);
        navigate(`/${name}`)
        console.log(response)
    }

    return (
        <Paper style={{ padding: "30px", marginTop: "5px" }}>
            <Fab
                variant="extended"
                color="primary"
                style={{ right: 20, position: 'fixed', background: "#5a51ff" }}
                onClick={() => navigate("/")}
            >
                Captured webpages
            </Fab>
            <CustomTextField
                placeholder='https://example.com'
                handleChange={handleChange}
                handleClick={handleClick}
            />
        </Paper>
    )
}

export default withAppBar(SearchPage);