import React from "react";
import { TextField, Button } from "@mui/material";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CustomTextField: React.FC<Props> = ({ placeholder, handleChange, handleClick }) => {
  return (
    <TextField
      color="primary"
      label="Webpage address"
      placeholder={placeholder}
      variant="outlined"
      focused
      onChange={handleChange}
      InputProps={{
        endAdornment:
          <Button
            variant="contained"
            style={{ background: "#5951ff" }}
            onClick={handleClick}
          >
            OK
          </Button>
      }}
    />
  );
};