import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import SkillItem from "./SkillItem"

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

const SkillCard = ({ className, skills,title, ...rest }) => {
  const classes = useStyles();
  return (
    <Box mt={3}>
    <Card>
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item key={skill.id} lg={2} md={3} xs={6}>
              <SkillItem className={classes.skillCard} skill={skill} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      </Card>
    </Box>
  );
};

SkillCard.propTypes = {
  className: PropTypes.string,
  skills: PropTypes.array,
  title : PropTypes.string.isRequired,
};

export default SkillCard;
