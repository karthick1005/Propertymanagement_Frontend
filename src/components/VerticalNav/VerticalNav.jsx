import React from "react";
import "./VerticalNav.css";
import { Box, Divider } from "@mui/material";
import {
  BuildingsIcon,
  DashboardIcon,
  Discussion,
  Doublesheet,
  Expandedarrow,
  Filemanager,
  Leads,
  Proficon,
  Requestticket,
  Settingicon,
  UploadIcon,
} from "../../assets/Icons";
const VerticalNav = () => {
  return (
    <Box
      sx={{
        top: 54,
        position: "fixed",
        height: "calc(100vh - 54px)",
        bgcolor: "#333333",
        width: "72.5px",
        padding: "0px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "5",
      }}
    >
      <Box
        sx={{
          width: "26px",
          height: "26px",
          bgcolor: "#5078E1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "13px",
          marginTop: "16.5px",
          cursor: "pointer",
        }}
      >
        <Expandedarrow
          style={{
            transform: "rotate(-90deg)",
            fill: "white",
            stroke: "white",
          }}
        />
      </Box>
      <Divider
        // flexItem
        sx={{
          width: "26px",
          height: "0px",
          bgcolor: "#E4E8EE",
          marginTop: "13.5px",
        }}
      />
      <Box
        sx={{
          width: "30px",
          height: "30px",
          marginTop: "24px",
          cursor: "pointer",
        }}
      >
        <DashboardIcon />
      </Box>
      <Box
        sx={{
          width: "30px",
          height: "30px",
          bgcolor: "#5078E1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          marginTop: "13px",
          padding: "8px 7px",
          cursor: "pointer",
        }}
      >
        <Leads />
      </Box>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        <Proficon />
      </Box>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        <BuildingsIcon />
      </Box>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        <Requestticket />
      </Box>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          padding: "5px",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        <Settingicon />
      </Box>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        <UploadIcon />
      </Box>
      {/* <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <Doublesheet style={{ fill: "white" }} />
      </Box> */}
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        <Filemanager />
      </Box>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        <Discussion />
      </Box>
    </Box>
  );
};

export default VerticalNav;
