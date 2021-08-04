import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import ComputerIcon from "@material-ui/icons/Computer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  let onSubmit = (values, props) => {
    props.resetForm();
    console.log(props);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string("ErrorMassage")
      .test("len", "Minimum 3 characters", (val) => val.length >= 3)
      .required("Required"),
    password: Yup.string("ErrorMassage").required("Required"),
  });

  const initialValues = {
    name: "",
    password: "",
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div>
            <ComputerIcon />
          </div>
          <Typography component="h1" variant="h5">
            Լօg in
          </Typography>
          <Formik
            className={classes.form}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  helperText={<ErrorMessage name="name" />}
                  name="name"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Name"
                  autoComplete="Name"
                  autoFocus
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={<ErrorMessage name="password" />}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </ThemeProvider>
  );
}
