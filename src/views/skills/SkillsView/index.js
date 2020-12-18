import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
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
  const [frontEndSkills] = useState(data);
  const [backEndSkills] = useState(data);
  const [otherskills] = useState(data);

  return (
    <Page className={classes.root} title="Skills">
      <Container maxWidth={false}>
        <SkillCard
          title="FrontEnd"
          skills={frontEndSkills.filter((skill) => (skill.type === FRONTEND))}
        />
        <SkillCard
          title="BackEnd"
          skills={backEndSkills.filter((skill) => (skill.type === BACKEND))}
        />
        <SkillCard
          title="Other"
          skills={otherskills.filter((skill) => (skill.type === OTHER))}
        />
      </Container>
    </Page>
  );
};

export default SkillList;
