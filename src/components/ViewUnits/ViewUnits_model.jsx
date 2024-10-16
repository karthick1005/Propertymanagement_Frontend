import { Box } from "@mui/material";
import React from "react";
import { Deleteicon } from "../../assets/Icons";

const ViewUnits_model = ({ data, type, removedata }) => {
  return (
    <Box
      sx={{
        height: "58px",
        // maxHeight: "62.5px",
        flexShrink: 0,
        // boxSizing: "border-box",
        borderBottom: "1px solid #E4E8EE",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
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
          {data.name}
        </h1>
        <Box sx={{ display: "flex", alignItems: "center", gap: "23px" }}>
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#4E5A6B",
            }}
          >
            ${Number(data.price) - (data.Discount / 100) * Number(data.price)}
          </h1>
          {/* <Box
            sx={{ width: "26px", height: "26px", cursor: "pointer" }}
            onClick={() => removedata(data, type)}
          >
            <Deleteicon />
          </Box> */}
        </Box>
      </Box>
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
            color: "#98A0AC",
          }}
        >
          Discount
        </h1>
        <Box sx={{ display: "flex", alignItems: "center", gap: "23px" }}>
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#98A0AC",
            }}
          >
            {data.Discount}%
          </h1>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewUnits_model;
