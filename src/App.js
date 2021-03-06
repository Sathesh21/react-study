import * as React from "react";
import ReactDOM from "react-dom";
import { TextField, Box, Button } from "@mui/material";
class App extends React.Component {
  state = { isButtonEnabled: false, userName: "", password: "" };
  changeInDisable = () => {
    if (this.state.userName !== "" && this.state.password !== "") {
      this.setState({ isButtonEnabled: true });
    }
  };
  enteredValueUname = (value) => {
    if (value) {
      this.setState({ userName: value }, () => {
        this.changeInDisable();
      });
    }
  };
  enteredValuePassword = (value) => {
    if (value) {
      this.setState({ password: value }, () => {
        this.changeInDisable();
      });
    }
  };
  checkvalues = () => {
    if (this.state.userName === "admin" && this.state.password === "admin") {
      alert("entered username and password is correct");
    } else {
      alert("please enter the valid username and password ");
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
            <Box sx={{ ...commonStyles, border: 1 }}>
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
              {this.state.isButtonEnabled && (
                <Button
                  onClick={this.checkvalues}
                  variant="contained"

                  // {this.state.isButtonEnabled ? "false" : "true"}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </center>
      </>
    );
  }
}
export default App;
