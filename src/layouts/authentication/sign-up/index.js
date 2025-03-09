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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Create an Account
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2} display="flex" gap={3}>
              <MDInput type="text" label="First Name" variant="standard" fullWidth />
              <MDInput type="text" label="Last Name" variant="standard" fullWidth />
              <MDInput
                type="date"
                label="Date of Birth"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </MDBox>
            <MDBox mb={2} display="flex" gap={3}>
              <MDInput type="email" label="E-mail Address" variant="standard" fullWidth />
              <MDInput type="tel" label="Mobile Number" variant="standard" fullWidth />
              <MDInput type="text" label="Street Address" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2} display="flex" gap={3}>
              <MDInput select label="Province" variant="standard" fullWidth>
                <MenuItem value="">Select Province</MenuItem>
                {/* Add province options here */}
              </MDInput>
              <MDInput select label="City" variant="standard" fullWidth>
                <MenuItem value="">Select City</MenuItem>
                {/* Add city options here */}
              </MDInput>
              <MDInput select label="Baranggay" variant="standard" fullWidth>
                <MenuItem value="">Select Baranggay</MenuItem>
                {/* Add baranggay options here */}
              </MDInput>
            </MDBox>
            <MDBox mb={2} display="flex" gap={3}>
              <MDInput type="password" label="Preferred Password" variant="standard" fullWidth />
              <MDInput type="password" label="Confirm Password" variant="standard" fullWidth />
              <MDInput
                type="file"
                label="Upload Valid ID"
                variant="standard"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" justifyContent="center">
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox display="flex" justifyContent="center">
              <MDButton variant="gradient" color="info" fullWidth>
                Sign Up
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
