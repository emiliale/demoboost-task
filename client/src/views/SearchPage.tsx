import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Fab, Paper, Alert, AlertTitle } from "@mui/material";
import { CustomTextField } from "./components/TextField";
import webpageAPI from "../api/WebpageAPI";
import withAppBar from "./utils/withAppBar";

const SearchPage: React.FC = () => {
    const navigate = useNavigate()
    const [webpage, setWebpage] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setWebpage(event.target.value);

    const handleClick = async () => {
        if (webpage.startsWith("http://") || webpage.startsWith("https://")) {
            const name: string = webpage.split('/')[2]
            await webpageAPI.addWebpage(name, webpage);
            navigate(`/${name}`)
        } else {
            setError(true)
        }
    }

    function ErrorPopup() {
        if (error) {
            return <Alert severity="error" style={{ marginTop: "10px" }}>
                <AlertTitle>Error</AlertTitle>
                The address should start with "https://" or "http://"
            </Alert>
        } else {
            return <div></div>
        }
    }

    return (
        <Paper style={{ padding: "30px", marginTop: "5px" }}>
            <Fab
                variant="extended"
                color="primary"
                style={{ right: 20, position: 'fixed', background: "#5951ff" }}
                onClick={() => navigate("/")}
            >
                Captured webpages
            </Fab>
            <CustomTextField
                placeholder='https://example.com'
                handleChange={handleChange}
                handleClick={handleClick}
            />
            <ErrorPopup />
        </Paper>
    )
}

export default withAppBar(SearchPage);