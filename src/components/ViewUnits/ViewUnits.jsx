import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import {
  Bathtub,
  Bedicon,
  Handbook,
  Home,
  Squarefeet,
} from "../../assets/Icons";
import useStore from "../../zustand/store";
import ViewUnits_model from "./ViewUnits_model";
const ViewUnits = () => {
  const apartment = [
    {
      id: 1,
      img: "apartment.jpg",
    },
    {
      id: 2,
      img: "apartment.jpg",
    },
    {
      id: 3,
      img: "apartment.jpg",
    },
    {
      id: 4,
      img: "apartment.jpg",
    },
    {
      id: 5,
      img: "apartment.jpg",
    },
  ];
  const { setpopup, currentselected, estate, updateAmenities, updateUtility } =
    useStore();
  // const [localAmenities, setLocalAmenities] = useState(
  //   {
  //     Amenities:
  //       [...estate.find((val) => val.id === currentselected.id)?.Amenities] ||
  //       [],
  //     Utility:
  //       [...estate.find((val) => val.id === currentselected.id)?.Utility] || [],
  //   } || {}
  // );
  const [localAmenities, setLocalAmenities] = useState(() => {
    const estateEntry = estate.find((val) => val.id === currentselected.id);

    return {
      Amenities: estateEntry?.Amenities ? [...estateEntry.Amenities] : [],
      Utility: estateEntry?.Utility ? [...estateEntry.Utility] : [],
      primary: estateEntry?.primary ? [...estateEntry.primary] : [],
      secondary: estateEntry?.secondary ? [...estateEntry.secondary] : [],
      onetime: estateEntry?.onetime ? [...estateEntry.onetime] : [],
      inventory: estateEntry?.inventory ? [...estateEntry.inventory] : [],
      parking: estateEntry?.parking ? [...estateEntry.parking] : [],
    };
  });
  const removedata = (data, type) => {
    setLocalAmenities((prevdata) => ({
      ...prevdata,
      [type]: prevdata[type].filter((val) => val.id !== data.id),
    }));
  };
  const savecompoenent = () => {
    updateAmenities(localAmenities.Amenities);
    updateUtility(localAmenities.Utility);
  };
  const calculatetotal = () => {
    let total = 0;
    for (const key in localAmenities) {
      total += localAmenities[key].reduce(
        (acc, item) => acc + (item.price - (item.Discount / 100) * item.price),
        0
      );
    }
    console.log(currentselected);
    return total + currentselected.price;
  };
  return (
    <Box
      sx={{
        width: "888px",
        height: "688px",
      }}
    >
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
          Unit Details
        </h1>
        <CloseIcon
          sx={{ color: "#7C8594", userSelect: "none", cursor: "pointer" }}
          onClick={() => setpopup(null)}
        />
      </Box>
      <Box sx={{ padding: "24px", display: "flex", gap: "23.5px" }}>
        <Box
          sx={{
            width: "381px",
            display: "flex",
            gap: "24px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "168px",
              display: "flex",
              gap: "8px",
            }}
          >
            {currentselected.estate_images.map((val, i) => {
              if (i == 0) {
                return (
                  <Box
                    sx={{
                      backgroundImage: `url(${val.img})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "205px",
                      height: "168px",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  />
                );
              }
              if (i == 1) {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      width: "168px",
                    }}
                  >
                    {currentselected.estate_images
                      .slice(1, 4)
                      .map((value, index) => {
                        return (
                          <Box
                            sx={{
                              backgroundImage: `url(${value.img})`,
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              width: "80px",
                              height: "80px",
                              borderRadius: "8px",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            {index > 3 ? (
                              <Box
                                sx={{
                                  bgcolor: "#1D1D1D73",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "8px",
                                  color: "white",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                }}
                              >
                                +{currentselected.estate_images.length - 5}
                              </Box>
                            ) : null}
                          </Box>
                        );
                      })}
                    {currentselected.estate_images
                      .slice(4, 5)
                      .map((value, index) => {
                        console.log(value.id);
                        return (
                          <Box
                            sx={{
                              backgroundImage: `url(${value.img})`,
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              width: "80px",
                              height: "80px",
                              borderRadius: "8px",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            <Box
                              sx={{
                                bgcolor: "#1D1D1D73",
                                width: "100%",
                                height: "100%",
                                borderRadius: "8px",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "18px",
                                fontWeight: "bold",
                                cursor: "pointer",
                              }}
                            >
                              +{currentselected.estate_images.length - 4}
                            </Box>
                          </Box>
                        );
                      })}
                  </Box>
                );
              }
            })}
          </Box>
          <Box>
            <Box sx={{ display: "flex" }}>
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#091B29",
                }}
              >
                {currentselected.name}
              </h1>
              <Box
                sx={{
                  backgroundColor: "#F5F7FA",
                  borderRadius: "4px",
                  width: "74px",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#98A0AC",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                UNT-1234
              </Box>
            </Box>
            <h1
              style={{
                fontSize: "14px",
                color: "#4E5A6B",
                fontWeight: 400,
                marginTop: "7px",
              }}
            >
              {currentselected.address}
            </h1>
            <Box
              sx={{
                display: "flex",
                gap: "12.83px",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid #F5F7FA",
                // width: "110px",
              }}
            >
              <Box sx={{ display: "flex", gap: "7.3px", alignItems: "center" }}>
                <Bedicon />
                <p style={{ fontSize: "14px" }}>{currentselected.bed}</p>
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
              <Box sx={{ display: "flex", gap: "7.3px", alignItems: "center" }}>
                <Bathtub />
                <p style={{ fontSize: "14px" }}>{currentselected.bathtub}</p>
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
              <Box sx={{ display: "flex", gap: "7.3px", alignItems: "center" }}>
                <Home />
                <p style={{ fontSize: "14px" }}>{currentselected.bhk}BHK</p>
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
              <Box sx={{ display: "flex", gap: "7.3px", alignItems: "center" }}>
                <Squarefeet />
                <p style={{ fontSize: "12px", fontWeight: "400" }}>
                  <span
                    sx={{
                      color: "#4E5A6B",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {currentselected.sqft}
                  </span>
                  Sq.Ft
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Handbook />
                <h1
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#091B29",
                    marginLeft: "8px",
                  }}
                >
                  Handbook
                </h1>
              </Box>
              <h1
                style={{
                  fontSize: "14px",
                  color: "#5078E1",
                  fontWeight: 600,
                }}
              >
                View / Download
              </h1>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#F8F9FB",
            width: "434px",
            // height: "530px",
            boxSizing: "border-box",
            padding: "16px",
            borderRadius: "4px",
          }}
        >
          <h1
            style={{ fontSize: "14px", fontWeight: "bold", color: "#091B29" }}
          >
            UNIT PRICING DETAILS
          </h1>
          <Box
            sx={{
              marginTop: "15px",
              maxHeight: "500px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              overflowX: "hidden",
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {localAmenities.Amenities?.map((val) => (
              <ViewUnits_model
                data={val}
                type="Amenities"
                removedata={removedata}
              />
            ))}
            {localAmenities.Utility?.map((val) => (
              <ViewUnits_model
                data={val}
                type="Utility"
                removedata={removedata}
              />
            ))}{" "}
            {localAmenities?.primary.map((val, i) => {
              return (
                <ViewUnits_model
                  data={val}
                  removedata={removedata}
                  type={"primary"}
                />
              );
            })}
            {localAmenities?.secondary.map((val, i) => {
              return (
                <ViewUnits_model
                  data={val}
                  removedata={removedata}
                  type={"secondary"}
                />
              );
            })}
            {localAmenities?.onetime.map((val, i) => {
              return (
                <ViewUnits_model
                  data={val}
                  removedata={removedata}
                  type={"onetime"}
                />
              );
            })}
            {localAmenities?.inventory.map((val, i) => {
              return (
                <ViewUnits_model
                  data={val}
                  removedata={removedata}
                  type={"inventory"}
                />
              );
            })}
            {localAmenities?.parking.map((val, i) => {
              return (
                <ViewUnits_model
                  data={val}
                  removedata={removedata}
                  type={"parking"}
                />
              );
            })}
            {/* <Removecomponent_model /> */}
          </Box>
          <Box
            sx={{
              bgcolor: "#E4E8EE",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{ fontSize: "14px", fontWeight: "bold", color: "#091B29" }}
            >
              Final Total
            </h1>
            <h1
              style={{ fontSize: "14px", fontWeight: "bold", color: "#091B29" }}
            >
              $ {calculatetotal()}
            </h1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewUnits;
