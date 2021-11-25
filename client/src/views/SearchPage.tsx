import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import withAppBar from "./utils/withAppBar";
import { Fab, Paper } from "@mui/material";
import { CustomTextField } from "./components/TextField";

const SearchPage: React.FC = () => {
    const navigate = useNavigate()
    const [webpage, setWebpage] = useState<string>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setWebpage(event.target.value);

    const handleClick = () => console.log(webpage)

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