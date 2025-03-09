/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoHealth from "assets/images/small-logos/health.svg";
import logoEnvironment from "assets/images/small-logos/environment.svg";
import logoCommunity from "assets/images/small-logos/community.svg";
import logoUtility from "assets/images/small-logos/utility.svg";
import logoInfra from "assets/images/small-logos/infrastructure.svg";
import logoInformation from "assets/images/small-logos/information.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "announcement", accessor: "announcement", width: "60%", align: "left" },
      { Header: "date", accessor: "date", width: "10%", align: "center" },
      { Header: "views", accessor: "views", width: "30%", align: "center" },
    ],

    rows: [
      {
        announcement: <Company image={logoHealth} name="Free Medical Check-Up & Vaccination" />,
        date: "March 10, 2025",
        views: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        announcement: <Company image={logoEnvironment} name="Cleanup Drive" />,
        date: "March 12, 2025",
        views: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        announcement: <Company image={logoCommunity} name="Curfew Reminder" />,
        date: "March 15, 2025",
        views: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        announcement: <Company image={logoUtility} name="Scheduled Power Interruption" />,
        date: "March 18, 2025",
        views: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        announcement: <Company image={logoInfra} name="Road Closure Advisory" />,
        date: "March 20, 2025",
        views: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        announcement: <Company image={logoInformation} name="Barangay Assembly Meeting" />,
        date: "March 22, 2025",
        views: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
