/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function documentRequestsTableData() {
  return {
    columns: [
      { Header: "Request ID", accessor: "id", align: "left" },
      { Header: "Document Type", accessor: "documentType", align: "left" },
      { Header: "Requested By", accessor: "requestedBy", align: "left" },
      { Header: "Date Requested", accessor: "dateRequested", align: "left" },
      { Header: "Pickup/Digital", accessor: "deliveryMethod", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Actions", accessor: "actions", align: "center" },
    ],

    rows: [
      {
        id: "RQ-0001",
        documentType: "Barangay Clearance",
        requestedBy: "Juan Dela Cruz",
        dateRequested: "2025-03-09",
        deliveryMethod: "Pickup",
        status: "Pending",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RQ-0002",
        documentType: "Certificate of Residency",
        requestedBy: "Maria Santos",
        dateRequested: "2025-03-08",
        deliveryMethod: "Digital Copy",
        status: "Approved",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RQ-0003",
        documentType: "Certificate of Indigence",
        requestedBy: "Carlos Dizon",
        dateRequested: "2025-03-07",
        deliveryMethod: "Pickup",
        status: "In Progress",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RQ-0004",
        documentType: "Business Permit",
        requestedBy: "Rosario Mendoza",
        dateRequested: "2025-03-06",
        deliveryMethod: "Digital Copy",
        status: "Rejected",
        actions: (
          <MDButton variant="text" color="info">
            View
          </MDButton>
        ),
      },
      {
        id: "RQ-0005",
        documentType: "Other Special Certifications",
        requestedBy: "Anonymous",
        dateRequested: "2025-03-05",
        deliveryMethod: "Pickup",
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