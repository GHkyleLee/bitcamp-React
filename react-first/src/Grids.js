import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

export default () => (
  <>
    <Typography componet="h2" variant="h5" gutterBottom>
      Grids
    </Typography>

    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          3
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          4
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          5
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          6
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          7
        </Box>
      </Grid>
    </Grid>
  </>
);
