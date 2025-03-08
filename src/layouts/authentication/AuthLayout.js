import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Footer from "layouts/authentication/components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout({ children }) {
  // Define styles properly outside the return statement
  const authLayoutStyle = {
    display: "flex",
    height: "100vh",
    backgroundColor: "#485266",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <PageLayout>
      {/* Apply background color */}
      <MDBox position="absolute" width="100%" minHeight="100vh" style={authLayoutStyle} />

      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </MDBox>

      <Footer light />
    </PageLayout>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
