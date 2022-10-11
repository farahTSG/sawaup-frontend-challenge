import Grid from "@mui/material/Grid";
import * as React from "react";
import { Box } from "@mui/system";


function Frontend() {
  return (
    /*Navbar component*/
   <div>
    <Box sx = {{ height:'10%', width:'100%',bgcolor:'green'}}>
    <Grid container height={2}>
      <Grid item xs={1} padding={3}>
        <Box>
      <img src="data:image/jpeg;base64,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" alt="SawaUp"
       width='80'
       height="80"  />
       </Box>
      </Grid>
      <Grid item sx={{bgcolor:'blue'}}xs={7}>
      </Grid>
      <Grid item sx={{bgcolor:'yellow'}} xs={4}>
        Search bar
        </Grid> 

    </Grid>
    </Box>
   </div>
     
  );
}

export default Frontend;
