import React, { useEffect, useState } from "react";
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
import ViewUnits from "../ViewUnits/ViewUnits";

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

export const Unitcard = ({ data, deleteestate }) => {
  const {
    anchor,
    currentselected,
    setAnchor,
    setcurrentselected,
    setpopup,
    estate,
  } = useStore();
  const handleClick = (event) => {
    event.stopPropagation();
    setcurrentselected(data);
    setAnchor(anchor === event.currentTarget ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popper" : undefined;
  const [localAmenities, setLocalAmenities] = useState(() => {
    const estateEntry = estate.find((val) => val.id === data.id);

    return {
      Amenities: estateEntry?.Amenities ? [...estateEntry.Amenities] : [],
      Utility: estateEntry?.Utility ? [...estateEntry.Utility] : [],
    };
  });

  const [currrentprice, setcurrentprice] = useState(data.price);
  const [originalprice, setoriginalprice] = useState(data.price);
  useEffect(() => {
    const estateEntry = estate.find((val) => val.id === data.id);
    console.log(estateEntry);
    let datas = {
      Amenities: estateEntry?.Amenities ? [...estateEntry.Amenities] : [],
      Utility: estateEntry?.Utility ? [...estateEntry.Utility] : [],
      primary: estateEntry?.primary ? [...estateEntry.primary] : [],
      secondary: estateEntry?.secondary ? [...estateEntry.secondary] : [],
      onetime: estateEntry?.onetime ? [...estateEntry.onetime] : [],
      inventory: estateEntry?.inventory ? [...estateEntry.inventory] : [],
      parking: estateEntry?.parking ? [...estateEntry.parking] : [],
    };
    setLocalAmenities(datas);
    setcurrentprice(calculatetotal("Current", datas));
    setoriginalprice(calculatetotal("original", datas));
  }, [estate]);
  const listofobject = [
    "Amenities",
    "Utility",
    "primary",
    "secondary",
    "onetime",
    "inventory",
    "parking",
  ];
  const calculatetotal = (type, datas) => {
    let total = 0;
    for (const key in datas) {
      if (datas[key].length > 0) {
        if (type == "Current") {
          total += datas[key].reduce((acc, item) => {
            if (item.Discount <= 0 || item.Discount === null) {
              return acc + Number(item.price);
            }

            return acc + (item.price - (item.Discount / 100) * item.price);
          }, 0);
        } else if (type == "original") {
          total += datas[key].reduce(
            (acc, item) => acc + Number(item.price),
            0
          );
        }
      }
    }
    total += data.price;
    return total;
  };
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
        cursor: "pointer",
      }}
      onClick={() => {
        setcurrentselected(data);
        setpopup(<ViewUnits />);
      }}
    >
      <Box
        sx={{
          width: "198px",
          height: "100px",
          borderRadius: "4px",
          backgroundImage: `url(${
            data?.estate_images[0]?.img || "/apartment.jpg"
          })`,
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
            userSelect: "none",
          }}
          onClick={(event) => {
            event.stopPropagation();
            deleteestate(data);
          }}
        >
          <Trashicon />
        </Box>
        {currrentprice !== originalprice ? (
          <Box
            sx={{
              width: "85px",
              height: "17px",
              position: "absolute",
              right: "-10px",
              bottom: "-10px",
              bgcolor: "#FFF4EB",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "8px",
              fontWeight: "bold",
              color: "#FF9340",
            }}
          >
            % Discount Applied
          </Box>
        ) : null}
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
        <h1>{data.name}</h1>
        <h1
          style={{
            color: currrentprice === originalprice ? "black" : "#FF9340",
          }}
        >
          $ {currrentprice}
          {currrentprice !== originalprice ? ".00" : null}
        </h1>
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
        <p>{data.description}</p>

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
        <p>{data.sqft} Sq.Ft</p>
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
            <p style={{ fontSize: "14px" }}>{data.bed}</p>
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
            <p style={{ fontSize: "14px" }}>{data.bathtub}</p>
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
            <p style={{ fontSize: "14px" }}>{data.bhk}BHK</p>
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
              onClick={(event) => {
                event.stopPropagation();
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
              onClick={(event) => {
                event.stopPropagation();
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
              onClick={(event) => {
                event.stopPropagation();
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
              onClick={(event) => {
                event.stopPropagation();
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
              onClick={(event) => {
                event.stopPropagation();
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
