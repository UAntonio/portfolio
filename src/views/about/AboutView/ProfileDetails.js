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
          subheader="Stuff?"
          title="About"
        />
        <Divider />
        <CardContent>
        <Typography align="center" color="TextSecondary" variant="body2">
          Stuff here about myself
            </Typography>
     </CardContent>
     </Card>

  );
};



export default ProfileDetails;
