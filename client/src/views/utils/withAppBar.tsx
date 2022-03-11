import React, { ComponentClass, FunctionComponent } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const withAppBar = (WrappedComponent: ComponentClass | FunctionComponent) => {
    return () => {
        return (
            <>
                <AppBar
                    position="static"
                    style={{backgroundColor:"#5a51ff", borderRadius:"5px"}}
                >
                    <Toolbar>
                        <Typography variant="h6" style={{fontFamily:"Verdana"}}>demoboost embedding</Typography>
                    </Toolbar>
                </AppBar>
                <WrappedComponent />
            </>
        );
    };
};

export default withAppBar;