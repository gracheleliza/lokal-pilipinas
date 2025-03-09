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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import issuesTableData from "layouts/tables/data/issuesTableData";

function Tables() {
  const { columns: pColumns, rows: pRows } = issuesTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              {/* Form Header */}
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="success"
                textAlign="center"
              >
                <MDTypography variant="h5" color="white">
                  Report an Issue
                </MDTypography>
              </MDBox>

              {/* Form Fields */}
              <MDBox pt={3} pb={3} px={3}>
                <Grid container spacing={3}>
                  {/* Issue Category & Barangay Selection */}
                  <Grid item xs={12} md={6}>
                    <MDInput select label="Issue Category" variant="standard" fullWidth>
                      <MenuItem value="fire">Fire Emergencies</MenuItem>
                      <MenuItem value="road">Road Issues</MenuItem>
                      <MenuItem value="disturbance">Community Disturbances</MenuItem>
                      <MenuItem value="flood">Flood or Drainage Problem</MenuItem>
                      <MenuItem value="animal">Animal Control</MenuItem>
                      <MenuItem value="waste">Garbage & Waste Mgmt</MenuItem>
                      <MenuItem value="other">Other Concerns</MenuItem>
                    </MDInput>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDInput select label="Baranggay" variant="standard" fullWidth>
                      <MenuItem value="">Select Baranggay</MenuItem>
                      {/* Add barangay options here */}
                    </MDInput>
                  </Grid>

                  {/* Specific Location & Upload Image */}
                  <Grid item xs={12} md={6}>
                    <MDInput type="text" label="Specific Location" variant="standard" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MDInput
                      type="file"
                      label="Upload Image (Optional)"
                      variant="standard"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  {/* Description Field */}
                  <Grid item xs={12}>
                    <MDInput
                      type="text"
                      label="Description"
                      variant="standard"
                      fullWidth
                      multiline
                      rows={3}
                    />
                  </Grid>

                  {/* Optional Name, Contact Info, and Email */}
                  <Grid item xs={12} md={4}>
                    <MDInput
                      type="text"
                      label="Your Name (Optional)"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MDInput
                      type="tel"
                      label="Contact Number (Optional)"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MDInput
                      type="email"
                      label="Email Address (Optional)"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>

                  {/* Reminder & Submit Button */}
                  <Grid item xs={12} textAlign="center">
                    <MDTypography variant="body2" color="text" mb={2}>
                      For easier tracking, <strong>please log in</strong> before submitting your
                      report.
                    </MDTypography>
                    <MDButton variant="gradient" color="info">
                      Submit
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Track Reported Issues
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={true}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  canSearch={true}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
