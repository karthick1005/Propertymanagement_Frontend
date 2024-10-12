import { Box } from "@mui/material";
import React from "react";
import { Deleteicon } from "../../assets/Icons";

const Removecomponent_model = () => {
  return (
    <Box
      sx={{
        height: "38px",
        // maxHeight: "62.5px",
        flexShrink: 0,
        // boxSizing: "border-box",
        borderBottom: "1px solid #E4E8EE",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#4E5A6B",
          }}
        >
          Bill Name Here
        </h1>
        <Box sx={{ display: "flex", alignItems: "center", gap: "23px" }}>
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#4E5A6B",
            }}
          >
            $1,000
          </h1>
          <Box sx={{ width: "26px", height: "26px", cursor: "pointer" }}>
            <Deleteicon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Removecomponent_model;
