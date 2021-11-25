import React from "react";
import { useNavigate } from 'react-router-dom'
import withAppBar from "./utils/withAppBar";
import { Fab, TextField, Button, Paper } from "@mui/material";


const SearchPage: React.FC = () => {
    const navigate = useNavigate()
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
            <TextField 
            color="primary"
            label="Webpage address" 
            placeholder="https://example.com" 
            variant="outlined" 
            focused 
            InputProps={{endAdornment: <Button variant="contained" style={{background: "#5a51ff"}}>OK</Button>}}
            />
{/* 
            <TextField
                placeholder='https://example.com'
                handleChange={e => { console.log(e) }}
                handleClick={e => { console.log("Klikniete kurba") }}
            /> */}
        </Paper>
    )
}

export default withAppBar(SearchPage);