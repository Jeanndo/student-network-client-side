import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import Icon from "./Icon";

const GoogleAuth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sing In was unsuccessful. Try Again Later");
  };

  return (
    <div className={classes.googleLoginContainer}>
      <GoogleLogin
        clientId="65688288942-pf0sgh5gcvnneskbgspl6mel27bbuf91.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            className={classes.googleButton}
            color="primary"
            size="small"
            onClick={renderProps.onClick}
            disabled={renderProps.deisabled}
            startIcon={<Icon />}
            variant="contained"
          >
            Google Sign In
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default GoogleAuth;
