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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";

export default function projectsTableData() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Report ID", accessor: "id", align: "left" },
      { Header: "Issue Category", accessor: "category", align: "left" },
      { Header: "Barangay", accessor: "barangay", align: "left" },
      { Header: "Description", accessor: "description", align: "left" },
      { Header: "Reported By", accessor: "reportedBy", align: "left" },
      { Header: "Date Reported", accessor: "dateReported", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Actions", accessor: "actions", align: "center" },
    ],

    rows: [
      {
        id: "RP-00123",
        category: "Road Issue",
        barangay: "Barangay 1",
        description: "Pothole causing traffic issues",
        reportedBy: "Juan Dela Cruz",
        dateReported: "2025-03-09",
        status: "Pending",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RP-00124",
        category: "Garbage & Waste",
        barangay: "Barangay 5",
        description: "Uncollected garbage for 3 days",
        reportedBy: "Anonymous",
        dateReported: "2025-03-08",
        status: "In Progress",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RP-00125",
        category: "Flood Problem",
        barangay: "Barangay 3",
        description: "Clogged drainage causing flooding",
        reportedBy: "Maria Santos",
        dateReported: "2025-03-07",
        status: "Resolved",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RP-00126",
        category: "Fire Emergency",
        barangay: "Barangay 2",
        description: "Electrical fire near market area",
        reportedBy: "Carlos Dizon",
        dateReported: "2025-03-06",
        status: "Under Investigation",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RP-00127",
        category: "Animal Control",
        barangay: "Barangay 4",
        description: "Stray dogs attacking pedestrians",
        reportedBy: "Rosario Mendoza",
        dateReported: "2025-03-05",
        status: "Pending",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RP-00128",
        category: "Community Disturbance",
        barangay: "Barangay 6",
        description: "Loud music late at night",
        reportedBy: "Anonymous",
        dateReported: "2025-03-04",
        status: "Resolved",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
    ],
  };
}
