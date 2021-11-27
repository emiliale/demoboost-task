import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Fab, ListItem, List, ListItemButton, ListItemText, Typography, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import withAppBar from "./utils/withAppBar";
import webpageAPI from "../api/WebpageAPI";

const ListPage: React.FC = () => {

    const [webpages, setWebpages] = useState<string[]>([])
    const navigate = useNavigate()

    const listItems: JSX.Element[] =
        webpages.map((webpage) =>
            <ListItem key={webpage} disablePadding>
                <ListItemButton onClick={() => navigate(`/${webpage}`)}>
                    <ListItemText primary={webpage} />
                </ListItemButton>
            </ListItem>
        );

    useEffect(() => {
        (async () => {
            const webpagesObjects = await webpageAPI.getWebpages();
            const webpagesNames =
                webpagesObjects.payload.map(
                    (webpage: { name: string, address: string }) => webpage.name)
            setWebpages(webpagesNames)
        })();
    }, []);

    return (
        <Paper style={{ padding: "30px", marginTop: "5px" }}>
            <Fab
                color="primary"
                style={{ right: 20, position: 'fixed', background: "#5a51ff" }}
                onClick={() => navigate("/search")}
            >
                <AddIcon />
            </Fab>
            <Typography style={{ fontWeight: "bold" }}>Captured webpages:</Typography>
            <List>
                {listItems}
            </List>
        </Paper>
    )
}

export default withAppBar(ListPage);