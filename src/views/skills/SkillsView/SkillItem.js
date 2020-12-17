import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    maxWidth: 200,
  },
  media: {
    paddingTop: '30.25%', 
    height: 140,
  },
}));

const SkillItem = ({ className, skill, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardMedia
        className={classes.media}
        image={skill.image}
        title={skill.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {skill.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

SkillItem.propTypes = {
  className: PropTypes.string,
  skill: PropTypes.object.isRequired,
};

export default SkillItem;
