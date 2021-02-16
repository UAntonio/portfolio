import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";



const ProfileDetails = () => {
  return (
    <Card>
      <CardHeader title="About" />
      <Divider />
      <CardContent>
        <Typography
          align="left"
          color="textPrimary"
          variant="body1"
          paragraph={true}
        >
          I am currently a Senior Product Specialist at Cognizant located in
          Woodland Hills, CA.(Working remote frmo Seaside, CA) Previously, I
          worked with CIG (Capital Insurance Group) as a Software Engineer for
          3.5 years in Monterey, CA.
        </Typography>
        <Divider></Divider>
        <Typography align="left" color="textPrimary" variant="subtitle1">
          My work at Cognizant:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="- Automate and aggregate reports into an easy to access dashboard
              using Splunk in order to reduce the manual work by 4 hours to having
              up to date reports"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="- Coordinate
              project activities with offshore team and provide any Guidewire
              support as required"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="- Analyze Incidents in order get the root cause for
              a permanent fix and provide a temporary work around in order for
              Agents to not experience any delay in doing business "
            />
          </ListItem>
        </List>

        <Typography align="left" color="textPrimary" variant="subtitle1">
          My work at CIG:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="- Analyze and implemented solutions to performance issues on the
                    Policy System application using AppDynamics for a better user friendly
                    experience"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="- Configuration and Integration of Policy Center to bring
              the latest features to Under Writers and process policies faster"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="-Mentored new employees" />
          </ListItem>
        </List>
        <Typography align="left" color="textPrimary" variant="subtitle1">
          What I enjoy:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="- Working on new technologies and I would consider my passion to be
              more of teaching others."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="- Solving problems and figuring out and
          implementing the solutions to bugs, defects, and application issues as
          this helps me grow as a developer and learn new skils."
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
