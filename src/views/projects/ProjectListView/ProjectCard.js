import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  CardMedia,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Button,
  Fab,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  stackDetails: {
    alignItems: "center",
    display: "flex",
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  media: {
    height: 140,
    paddingTop: '56.25%',
    backgroundSize: 'contain',
  },
}));

const ProjectCard = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>

          <CardMedia className={classes.media}
                image={project.media}
      />

        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {project.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {project.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.stackDetails}>
            <Typography align="center" color="textPrimary" variant="body2">
              {project.stack}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <Fab variant="extended" color="primary" href={project.gitUrl} target="_blank">
              <GitHubIcon className={classes.extendedIcon} />
            </Fab>
            
          </Grid>
          <Grid className={classes.statsItem} item >
            <Button
              color="primary"
              fullWidth
              startIcon={<OpenInNewIcon />}
              size="large"
              variant="contained"
              href={project.liveUrl}
              target="_blank"
            >
              View Online
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
