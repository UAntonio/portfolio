import React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  makeStyles,
  CardMedia,
  Link,
} from "@material-ui/core";
import Page from "src/components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    display: "flex",
  },
  media: {
    height: 0,
    paddingTop: '5.25%',
    width: 200,
  },
}));

const EducationView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Education">
      <Container maxWidth="lg">
        <Card>
          <CardHeader title="Education" />
          <Divider />
          <CardContent>
            <Typography align="left" color="textPrimary" variant="body2">
              {"\u2B24"} California State University Monterey Bay
            </Typography>
            <Typography align="left" color="TextSecondary" variant="body2">
              B.S Computer Science Concentration: Software Engineering,
              2014-2016
            </Typography>
            <Divider />
            <Typography align="left" color="textPrimary" variant="body2">
              {"\u2B24"} Monterey Peninsula College
            </Typography>
            <Typography align="left" color="TextSecondary" variant="body2">
              A.S. Mathematics, 2012-2014
            </Typography>
          </CardContent>
        </Card>
        <Box mt={3}>
          <Card>
            <CardHeader title="Certificates" />
            <Divider />
            <CardContent>
              <Link
                href="https://www.youracclaim.com/badges/dbc83ce0-a012-4be6-a404-c58d8ba6ffd4/public_url"
                target="_blank"
              >
                <CardMedia
                  className={classes.media}
                  image="/static/images/certifications/aws-certified-developer-associate.png"
                  href="https://www.youracclaim.com/badges/dbc83ce0-a012-4be6-a404-c58d8ba6ffd4/public_url"
                  target="_blank"
                  title="Developer Associate"
                />
              </Link>
              <Typography variant="body2" color="textSecondary" component="p">
                AWS Certified Developer - Associate
              </Typography>
              <Divider />
              <Link
                href="https://www.youracclaim.com/badges/f4cf6526-4956-4229-85dd-8106d73f6ba2/public_url"
                target="_blank"
              >
                <CardMedia
                  className={classes.media}
                  image="/static/images/certifications/aws-certified-cloud-practitioner.png"
                  title="Developer Associate"
                />
              </Link>
              <Typography variant="body2" color="textSecondary" component="p">
                AWS Certified Developer - Associate
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Page>
  );
};

export default EducationView;
