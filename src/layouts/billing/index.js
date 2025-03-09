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
import documentRequestTableData from "layouts/documents/documentRequestData";
import React, { useState } from "react"; // <-- Add this

function DocumentRequests() {
  const { columns: pColumns, rows: pRows } = documentRequestTableData();
  const [documentType, setDocumentType] = useState("");

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
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                textAlign="center"
              >
                <MDTypography variant="h5" color="white">
                  Request a Document
                </MDTypography>
              </MDBox>

              {/* Form Fields */}
              <MDBox pt={3} pb={3} px={3}>
                <Grid container spacing={3}>
                  {/* Document Type Selection */}
                  <Grid item xs={12} md={6}>
                    <MDInput
                      select
                      label="Document Type"
                      variant="standard"
                      fullWidth
                      value={documentType}
                      onChange={(e) => setDocumentType(e.target.value)}
                    >
                      <MenuItem value="barangay_clearance">Barangay Clearance</MenuItem>
                      <MenuItem value="residency">Certificate of Residency</MenuItem>
                      <MenuItem value="indigence">Certificate of Indigence</MenuItem>
                      <MenuItem value="business_permit">Business Permit</MenuItem>
                      <MenuItem value="other">Other Special Certifications</MenuItem>
                    </MDInput>
                  </Grid>

                  {/* Barangay Selection */}
                  <Grid item xs={12} md={6}>
                    <MDInput select label="Barangay" variant="standard" fullWidth>
                      <MenuItem value="">Select Barangay</MenuItem>
                      {/* Add barangay options here */}
                    </MDInput>
                  </Grid>

                  {/* Common Fields */}
                  <Grid item xs={12} md={6}>
                    <MDInput type="text" label="Full Name" variant="standard" fullWidth required />
                  </Grid>

                  {documentType !== "business_permit" && (
                    <Grid item xs={12} md={6}>
                      <MDInput type="text" label="Address" variant="standard" fullWidth required />
                    </Grid>
                  )}

                  {documentType === "residency" && (
                    <Grid item xs={12} md={6}>
                      <MDInput
                        type="number"
                        label="Years of Residency"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                  )}

                  {documentType === "indigence" && (
                    <Grid item xs={12} md={6}>
                      <MDInput
                        type="file"
                        label="Proof of Indigence (Required)"
                        variant="standard"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                      />
                    </Grid>
                  )}

                  {documentType === "business_permit" && (
                    <>
                      <Grid item xs={12} md={6}>
                        <MDInput
                          type="text"
                          label="Business Name"
                          variant="standard"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MDInput
                          type="text"
                          label="Business Address"
                          variant="standard"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MDInput
                          type="text"
                          label="Owner’s Name"
                          variant="standard"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MDInput
                          type="text"
                          label="TIN Number"
                          variant="standard"
                          fullWidth
                          required
                        />
                      </Grid>
                    </>
                  )}

                  {documentType === "other" && (
                    <Grid item xs={12}>
                      <MDInput
                        type="text"
                        label="Purpose of Request"
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Grid>
                  )}

                  {/* Upload Supporting Documents */}
                  <Grid item xs={12} md={6}>
                    <MDInput
                      type="file"
                      label="Upload Supporting Document (Optional)"
                      variant="standard"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  {/* Delivery Option */}
                  <Grid item xs={12} md={6}>
                    <MDInput select label="Delivery Option" variant="standard" fullWidth>
                      <MenuItem value="pickup">Pickup</MenuItem>
                      <MenuItem value="digital">Digital Copy</MenuItem>
                    </MDInput>
                  </Grid>

                  {/* Contact Information */}
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

                  {/* Submit Button */}
                  <Grid item xs={12} textAlign="center">
                    <MDTypography variant="body2" color="text" mb={2}>
                      For easier tracking, <strong>please log in</strong> before submitting your
                      request.
                    </MDTypography>
                    <MDButton
                      variant="gradient"
                      color="info"
                      disabled={documentType === "business_permit"}
                    >
                      Submit
                    </MDButton>
                    {documentType === "business_permit" && (
                      <MDTypography variant="body2" color="error" mt={1}>
                        Business Permit requests are currently unavailable. Please visit the
                        Municipal Office for assistance.
                      </MDTypography>
                    )}
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
                  Track Document Requests
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

export default DocumentRequests;
