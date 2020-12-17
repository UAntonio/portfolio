import React from "react";
import { Container, Box, makeStyles } from "@material-ui/core";
import Page from "src/components/Page";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="About">
      <Container maxWidth="lg">
            <Profile />
            <Box mt={3}>
          <ProfileDetails />
          </Box>

      </Container>
    </Page>
  );
};

export default About;
