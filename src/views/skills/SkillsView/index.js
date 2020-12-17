import React, { useState } from "react";
import {
  Container,
  makeStyles,
} from "@material-ui/core";
import Page from "src/components/Page";
import SkillCard from "./SkillCard";
import data from "./data";
import { BACKEND, FRONTEND, OTHER } from "src/constants/skillTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  skillCard: {
    height: "100%",
  },
}));

const SkillList = () => {
  const classes = useStyles();
  const [skills] = useState(data);

  return (
    <Page className={classes.root} title="Skills">
      <Container maxWidth={false}>

        <SkillCard
        title = "FrontEnd"
        skills = {skills.filter(skill=> skill.type = FRONTEND)}
        />

<SkillCard
        title = "BackEnd"
        skills = {skills.filter(skill=> skill.type = BACKEND)}
        />
        <SkillCard
        title = "Other"
        skills = {skills.filter(skill=> skill.type = OTHER)}
        />
        {/* <Card>
          <CardHeader title="FrontEnd" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid item key={skill.id} lg={2} md={3} xs={6}>
                  <SkillCard className={classes.skillCard} skill={skill} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        <Box mt={3}>
        <Card>
          <CardHeader title="BackEnd" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid item key={skill.id} lg={2} md={3} xs={6}>
                  <SkillCard className={classes.skillCard} skill={skill} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          </Card>
        </Box>
        <Box  mt={3}>
        <Card>
          <CardHeader title="BackEnd" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid item key={skill.id} lg={2} md={3} xs={6}>
                  <SkillCard className={classes.skillCard} skill={skill} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          </Card>
        </Box> */}
      </Container>
    </Page>
  );
};

export default SkillList;
