import React, { useState } from "react";
import "./Unitcard.css";
import { Box, Button } from "@mui/material";
import { Bathtub, Bedicon, Home, Trashicon } from "../../assets/Icons";
import AddIcon from "@mui/icons-material/Add";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import useStore from "../../zustand/store";
import Popup from "../Popup/Popup";
import PricingTable from "../PricingTable/PricingTable";
import Amenities from "../Amenities/Amenities";
import Utility from "../Utility/Utility";
import Discount from "../Discount/Discount";
import Removecomponent from "../Removecomponent/Removecomponent";

const PopupBody = styled("div")({
  width: "max-content",
  padding: "8px 12px",
  margin: "8px",
  borderRadius: "4px",
  border: "1px solid #E4E8EE",
  backgroundColor: "#fff",
  fontWeight: 600,
  boxShadow: "0px 10px 25px #0000000A",
  //   fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "12px",
  zIndex: 1,
  color: "#4E5A6B",
});

export default PopupBody;

export const Unitcard = ({ Unitid }) => {
  const { anchor, currentselected, setAnchor, setcurrentselected, setpopup } =
    useStore();
  const handleClick = (event) => {
    setcurrentselected(Unitid);
    setAnchor(anchor === event.currentTarget ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popper" : undefined;

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
          onClick={handleClick}
        >
          <AddIcon sx={{ fontSize: "16px" }} />
          Customise
        </Button>
        <BasePopup
          id={id}
          open={open}
          anchor={anchor}
          offset={4}
          placement="right"
        >
          <PopupBody>
            <Box
              sx={{
                paddingBottom: "10px",
                borderBottom: "1px solid #E4E8EE",
                cursor: "pointer",
              }}
              onClick={() => {
                setpopup(<PricingTable />);
                setAnchor(null);
              }}
            >
              Add Pricing Component
            </Box>
            <Box
              sx={{
                paddingTop: "10px",

                paddingBottom: "10px",
                borderBottom: "1px solid #E4E8EE",
                cursor: "pointer",
              }}
              onClick={() => {
                setpopup(<Amenities />);
                setAnchor(null);
              }}
            >
              Add Amenities
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                borderBottom: "1px solid #E4E8EE",
                cursor: "pointer",
              }}
              onClick={() => {
                setpopup(<Utility />);
                setAnchor(null);
              }}
            >
              Add Utilities
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                borderBottom: "1px solid #E4E8EE",
                cursor: "pointer",
              }}
              onClick={() => {
                setpopup(<Discount />);
                setAnchor(null);
              }}
            >
              Add Discount
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                setpopup(<Removecomponent />);
                setAnchor(null);
              }}
            >
              Remove Component
            </Box>
          </PopupBody>
        </BasePopup>
      </Box>
    </Box>
  );
};
