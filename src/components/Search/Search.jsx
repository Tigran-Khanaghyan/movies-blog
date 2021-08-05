import React from "react";
import { TextField } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

export default function Search() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{display: "flex", margin: "25px 0"}}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            {" "}
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}
