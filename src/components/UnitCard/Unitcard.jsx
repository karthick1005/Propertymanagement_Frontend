import React from "react";
import "./Unitcard.css";
import { Box, Button } from "@mui/material";
import { Bathtub, Bedicon, Home, Trashicon } from "../../assets/Icons";
import AddIcon from "@mui/icons-material/Add";
export const Unitcard = () => {
  return (
    <Box
      sx={{
        width: "221.5px",
        height: "244px",
        borderRadius: "6px",
        bgcolor: "white",
        border: "1px solid #E4E8EE",
        boxSizing: "border-box",
        padding: "11.5px",
        paddingBottom: "5px",
      }}
    >
      <Box
        sx={{
          width: "198px",
          height: "100px",
          borderRadius: "4px",
          backgroundImage: "url(/apartment.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "28px",
            height: "28px",
            borderRadius: "100%",
            position: "absolute",
            right: "8.35px",
            top: "9.35px",
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Trashicon />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="Estate_name"
      >
        <h1>Jumeirah Estate</h1>
        <h1>$ 1,200</h1>
      </Box>
      <Box
        className="userdetails_name_phone"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          marginTop: "5.5px",
          color: "#98A0AC",
          justifyContent: "space-between",
        }}
      >
        <p>Jumeirah Golf Estate</p>

        <Box
          sx={{
            color: "#091B29",
            fontSize: "10px",
            fontWeight: "bold",
            bgcolor: "#CED3DD",
            width: "6px",
            height: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
          }}
        />
        <p>2000 Sq.Ft</p>
      </Box>
      <Box
        className="userdetails_name_phone"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "14.5px",
          color: "#98A0AC",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // gap: "12.83px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "110px",
          }}
        >
          <Box sx={{ display: "flex", gap: "9.7px", alignItems: "center" }}>
            <Bedicon />
            <p style={{ fontSize: "14px" }}>2</p>
          </Box>
          <Box
            sx={{
              color: "#091B29",
              fontSize: "10px",
              fontWeight: "bold",
              bgcolor: "#CED3DD",
              width: "6px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
            }}
          />
          <Box sx={{ display: "flex", gap: "9.7px", alignItems: "center" }}>
            <Bathtub />
            <p style={{ fontSize: "14px" }}>2</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            // width: "110px",
          }}
        >
          <Box
            sx={{
              color: "#091B29",
              fontSize: "10px",
              fontWeight: "bold",
              bgcolor: "#CED3DD",
              width: "6px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
            }}
          />
          <Box sx={{ display: "flex", gap: "9.7px", alignItems: "center" }}>
            <Home />
            <p style={{ fontSize: "14px" }}>2BHK</p>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "5.47px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="text"
          sx={{
            fontWeight: "600",
            width: "85px",
            height: "32px",
            fontSize: "12px",
            textTransform: "none",
            boxSizing: "border-box",
            borderRadius: "4px",
          }}
        >
          <AddIcon sx={{ fontSize: "16px" }} />
          Customise
        </Button>{" "}
      </Box>
    </Box>
  );
};
