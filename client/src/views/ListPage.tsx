import React from "react";
import { useNavigate } from 'react-router-dom'
import withAppBar from "./utils/withAppBar";
import { Fab, ListItem, List, ListItemButton, ListItemText, Typography, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const ListPage: React.FC = () => {

    const webpages: string[] = ['https://elegantthemes.com/', 'https://example.com']
    const splitedWebpages: string[] = webpages.map((webpage => webpage.split('/')[2]))
    const listItems: JSX.Element[] =
        splitedWebpages.map((webpage) =>
            <ListItem key={webpage} disablePadding>
                <ListItemButton onClick={() => navigate(`/${webpage}`)}>
                    <ListItemText primary={webpage} />
                </ListItemButton>
            </ListItem>
        );

    const navigate = useNavigate()

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