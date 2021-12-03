import * as React from "react";
import ReactDOM from "react-dom";
import { TextField, Box, Button } from "@mui/material";
import { borderBottom } from "@mui/system";
class App extends React.Component {
  state = { isButtonEnabled: false, userName: "", password: "" };
  changeInDisable = () => {
    if (this.state.userName !== "" && this.state.password !== "") {
      this.setState({ isButtonEnabled: true });
    }
  };
  enteredValueUname = (value) => {
    if (value) {
      this.setState({ userName: this.state.userName + value });
      this.changeInDisable();
    }
  };
  enteredValuePassword = (value) => {
    if (value) {
      this.setState({ password: this.state.password + value });
      this.changeInDisable();
    }
  };
  render() {
    const commonStyles = {
      bgcolor: "background.paper",
      m: 1,
      borderColor: "text.primary",
      width: "300px",
      height: "300px",
      position: "absolute",
      bottom: "200px",
      left: "500px",
    };
    console.log("Button", this.state);
    return (
      <>
        <center>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <Box sx={{ ...commonStyles, border: 1 }}> */}
            <br></br>
            <TextField
              id="username"
              placeholder="user name"
              onChange={(event) => {
                this.enteredValueUname(event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="password"
              onChange={(event) => {
                this.enteredValuePassword(event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <Button
              variant="contained"
              disabled
              // {this.state.isButtonEnabled ? "false" : "true"}
            >
              Login
            </Button>
            {/* </Box> */}
          </Box>
        </center>
      </>
    );
  }
}
export default App;
