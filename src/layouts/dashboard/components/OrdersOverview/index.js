/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Emergency Alerts / Disaster Updates
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              Barangay
            </MDTypography>{" "}
            Santo Tomas
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="cloud"
          title="Weather Alerts"
          description="Typhoons, heavy rainfall warnings, and heat advisories."
        />
        <TimelineItem
          color="error"
          icon="warning"
          title="Disaster Updates"
          description="Earthquakes, floods, or landslides affecting the barangay."
        />
        <TimelineItem
          color="info"
          icon="place"
          title="Evacuation Notices"
          description="Locations of evacuation centers and relief distribution points."
        />
        <TimelineItem
          color="warning"
          icon="place"
          title="Emergency Contacts"
          description={
            <>
              STAC Hotline: 0921-907-8886
              <br />
              <a
                href="https://www.gov.ph/the-government/hotlines"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1e88e5", textDecoration: "none", fontWeight: "bold" }}
              >
                Government Hotlines
              </a>
            </>
          }
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
