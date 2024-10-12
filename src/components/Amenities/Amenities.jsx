import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Indoorpool } from "../../assets/Icons";
import useStore from "../../zustand/store";
import Amenities_toggle from "../CustomToggle/Amenities_toggle";
import CustomToggle from "../CustomToggle/Amenities_toggle";

const Amenities = () => {
  const { setpopup, estate, updateAmenities, currentselected } = useStore();
  const [localAmenities, setLocalAmenities] = useState(
    estate.find((val) => (val.id = currentselected)).Amenities || []
  );

  const amenities_list = [
    {
      id: 1,
      name: "Amenities_toggle",
      price: "20.00",
      valid: "Feb 22 - 12 Feb 23",
    },
  ];
  return (
    <Box sx={{ width: "432px", height: "688px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          borderBottom: "1px solid #E4E8EE",
        }}
      >
        <h1 style={{ fontSize: "16px", fontWeight: 800, color: "#091B29" }}>
          Add Amenities
        </h1>
        <CloseIcon
          sx={{ color: "#7C8594", userSelect: "none", cursor: "pointer" }}
          onClick={() => setpopup(null)}
        />
      </Box>
      <Box sx={{ padding: "24px" }}>
        <Box
          sx={{
            width: "384px",
            height: "60px",
            bgcolor: "#FEEAEA80",
            borderRadius: "4px",
            color: "#B3776D",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Indoorpool />
            <h1
              style={{
                fontSize: "14px",
                fontWeight: "800",
                marginLeft: "16px",
                marginRight: "2px",
              }}
            >
              05
            </h1>
            <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
              Total Amenities
            </h1>
          </Box>
          <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>$ 200.00</h1>
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <h1 style={{ fontSize: "14px", fontWeight: 600, color: "#98A0AC" }}>
            Available Amenities
          </h1>
          <Box
            sx={{
              height: "437px",
              maxHeight: "437px",
              width: "383px",
              marginTop: "12px",
              overflowX: "hidden",
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {amenities_list.map((val, i) => (
              <CustomToggle
                item={val}
                localitems={localAmenities}
                setlocalitems={setLocalAmenities}
                type={"Amenities"}
              />
            ))}
          </Box>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
              padding: "11px 16px",
              width: "383px",
              height: "40px",
              borderRadius: "4px",
              bgcolor: "#5078E1",
              color: "white",
              textWrap: "nowrap",
            }}
            onClick={() => {
              updateAmenities(localAmenities);
              setpopup(null);
            }}
          >
            Update & Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Amenities;
