import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Fab, ListItem, List, ListItemButton, ListItemText, Typography, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import withAppBar from "./utils/withAppBar";
import webpageAPI from "../api/WebpageAPI";
import "./styles.css"

const ListPage: React.FC = () => {

    return (
        <div >
            <iframe 
                className="iframe" 
                src="https://app.test.demoboost.com/demo/l0mfe1xj" ></iframe >
        </div>
    )
}

export default withAppBar(ListPage);