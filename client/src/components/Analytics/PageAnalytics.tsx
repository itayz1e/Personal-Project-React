import { Box, Container, Grid } from "@mui/material";
import Likes from "./Likes";
import Views from "./Views";
import ProjectTotal from "./ProjectTotal";

function PageAnalytics() {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={1}> {/* Adjusted spacing */}
          {/* Display Likes and Views components in a row */}
          <Grid item xs={12} sm={6} lg={4}>
            <Likes difference={16} positive={false} sx={{ height: "100%", width: "50%" }} value="1.6k" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Views difference={16} positive={false} sx={{ height: "100%", width: "50%" }} value="24k" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ProjectTotal difference={16} positive={false} sx={{ height: "100%", width: "50%" }} value="24k" />
          </Grid>

          {/* Uncomment and modify the following components based on your requirements */}
          {/* <Grid item xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: '100%' }} value={75.5} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: '100%' }} value="$15k" />
          </Grid>
          <Grid item xs={12} lg={8}>
            <OverviewSales
              chartSeries={[
                { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
                { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OverviewLatestProducts
              products={[
                // Your product data here
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <OverviewLatestOrders
              orders={[
                // Your order data here
              ]}
              sx={{ height: '100%' }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}

export default PageAnalytics;
