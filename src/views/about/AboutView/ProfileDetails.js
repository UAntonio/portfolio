import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';


const ProfileDetails = () => {

  return (
      <Card>
        <CardHeader
          title="About"
        />
        <Divider />
        <CardContent>
        <Typography align="center" color="TextSecondary" variant="body2">
        I am currently a Senior Product Specialist at Cognizant located in Woodland Hills, CA.
        Previously, I worked with CIG (Capital Insurance Group) as a Software Engineer for 3.5 years in Monterey, CA. 
        </Typography>
  <Divider></Divider>
        <br></br>
        <Typography align="left" color="TextSecondary" variant="body2">
        My work at Cognizant:
        - Analyze Incidents in order get the root cause for a permanent fix and provide a temporary work around in order for Agents to not experience any delay in doing business
        - Automate and aggregate reports into an easy to access dashboard using Splunk in order to reduce the manual work by 4 hours to having up to date reports
        - Coordinate project activities with offshore team and provide any Guidewire support as required

        <br></br>
        My work at CIG:
        - Analyze and implemented solutions to performance issues on the Policy System application using AppDynamics for a better user friendly experience
        - Configuration and Integration of Policy Center to bring the latest features to Under Writers and process policies faster
        - Mentored new employees

        <br></br>
        What I enjoy:
        - Working on new technologies and I would consider my passion to be more of teaching others.
        - Solving problems and figuring out and implementing the solutions to bugs, defects, and application issues as this helps me grow as a developer and learn new skils.

    
            </Typography>
     </CardContent>
     </Card>

  );
};



export default ProfileDetails;
