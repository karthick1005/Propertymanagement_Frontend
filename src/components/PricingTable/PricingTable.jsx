import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Expandedarrow } from "../../assets/Icons";

import useStore from "../../zustand/store";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const PricingTable = () => {
  const {
    infoanchor,
    setInfoAnchor,
    setpopup,
    primary,
    secondary,
    modifypricingtable,
  } = useStore();
  const [progress, setProgress] = React.useState(90);
  const handleClick = (event) => {
    event.stopPropagation();
    setInfoAnchor(
      infoanchor === event.currentTarget ? null : event.currentTarget
    );
  };

  const open = Boolean(infoanchor);
  const id = open ? "simple-popper" : undefined;
  const items = [
    {
      id: 1,
      name: "Primary",
      val: "primary",
      color: "#B3776D",
      bgcolor: "#FEEAEA80",
      height: "597px",
    },
    {
      id: 2,

      name: "Secondary",
      val: "secondary",
      color: "#896DB3",
      bgcolor: "#EDE4FE80",
      height: "577px",
    },
    {
      id: 3,

      name: "One Time Charges",
      val: "onetime",
      color: "#6DAFB3",
      bgcolor: "#DBF0F180",
      height: "579px",
    },
    {
      id: 4,

      name: "Refundables",
      val: "refundables",
      color: "#6D80B3",
      bgcolor: "#E4EDFF80",
      height: "578px",
    },
    {
      id: 5,
      val: "inventory",
      name: "Inventory Item",
      color: "#B3A16D",
      bgcolor: "#FFFAD880",
      height: "586px",
    },
    {
      id: 6,
      name: "Parking Slot",
      val: "parking",
      color: "#B3776D",
      bgcolor: "#FEEAEA80",
      height: "586px",
    },
  ];
  const Pricingdropdown = ["Pricing Component"];
  const [currentpricingdrop, setcurrentpricingdrop] = useState(
    Pricingdropdown[0]
  );
  const Taxdropdown = ["GST"];
  const [currentTaxdropdown, setcurrentTaxdropdown] = useState(Taxdropdown[0]);
  const handleChange = (event) => {
    setcurrentpricingdrop(event.target.value);
  };
  const [currentcomponent, setcurrentcomponent] = useState(null);
  const pricingvalues = { primary, secondary };
  const [componentbasedon, setcomponentbasedon] = useState("Amount");
  const [RevenueType, setrevenuetype] = useState("Lease");
  const [chargable, setchargable] = useState(true);
  const [pricebasedon, setpricebasedon] = useState("Monthly");
  const EnableCurrentcomponent = (val) => {
    setcomponentbasedon(pricingvalues[val.val]?.componentbasedon || "Amount");
    setrevenuetype(pricingvalues[val.val]?.RevenueType || "Lease");
    setcurrentcomponent(val);
  };
  const createpricingcomponent = () => {
    modifypricingtable({
      type: currentcomponent.val,
      val: {
        componentbasedon: componentbasedon,
        RevenueType: RevenueType,
      },
    });
    setcurrentcomponent(null);
  };
  return (
    <>
      <Box
        // sx={{ height: currentcomponent ? currentcomponent.height : "581px" }}
        sx={{ width: "484px" }}
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
            Pricing Table
          </h1>
          <CloseIcon
            sx={{ color: "#7C8594", userSelect: "none", cursor: "pointer" }}
            onClick={() => setpopup(null)}
          />
        </Box>
        {!currentcomponent ? (
          <Box sx={{ padding: "20px 24px", display: "grid", gap: "12px" }}>
            {items.map((val, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    bgcolor: val.bgcolor,
                    width: "100%",
                    height: "70px",
                    borderRadius: "6px",
                    color: val.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 14px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    EnableCurrentcomponent(val);
                    setInfoAnchor(null);
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        bgcolor: val.color,
                        height: "22px",
                        width: "22px",
                        borderRadius: "11px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                        marginRight: "13px",
                      }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </Box>
                    <h1 style={{ fontSize: "14px", fontWeight: 600 }}>
                      {val.name}
                    </h1>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InfoOutlinedIcon
                      sx={{
                        color: "#CED3DD",
                        marginRight: "24px",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                      onClick={handleClick}
                    />
                    <Expandedarrow
                      width={14}
                      height={7.5}
                      style={{
                        transform: "rotate(-90deg)",
                        fill: val.color,
                        stroke: val.color,
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        ) : (
          <Box
            sx={{
              padding: "20px 23px 20px 24px ",
              display: "grid",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                bgcolor: currentcomponent.bgcolor,
                width: "100%",
                height: "50px",
                borderRadius: "6px",
                color: currentcomponent.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                boxSizing: "border-box",
              }}
            >
              <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
                {currentcomponent.name + " Pricing Component"}
              </h1>
              <InfoOutlinedIcon
                sx={{
                  color: "#CED3DD",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={handleClick}
              />
            </Box>
            <Box
              sx={{
                color: "#98A0AC",
                display: "flex",
                gap: "16px",
                // gap: "16px",
                maxWidth: "100%",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                  Revenue Type
                </h1>
                <Box
                  sx={{
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "7px",
                    maxWidth: "fit-content",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "14px",
                      padding: "10px 12px",
                      maxWidth: "61px",
                      maxHeight: "40px",
                      borderRadius: "4px",
                      bgcolor: RevenueType === "Lease" ? "#5078E1" : "white",
                      color: RevenueType === "Lease" ? "white" : "#4E5A6B",
                      textWrap: "nowrap",
                      borderColor: "#E4E8EE",
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={() => setrevenuetype("Lease")}
                  >
                    Lease
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "14px",
                      padding: "10px 12px",
                      minWidth: "58px",

                      maxWidth: "58px",
                      height: "40px",
                      borderRadius: "4px",
                      bgcolor: RevenueType === "Sales" ? "#5078E1" : "white",
                      color: RevenueType === "Sales" ? "white" : "#4E5A6B",
                      textWrap: "nowrap",
                      borderColor: "#E4E8EE",
                      boxSizing: "border-box",
                    }}
                    onClick={() => setrevenuetype("Sales")}
                  >
                    Sales
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "14px",
                      padding: "10px 12px",
                      width: "75px",
                      height: "40px",
                      borderRadius: "4px",
                      bgcolor: RevenueType === "Manage" ? "#5078E1" : "white",
                      color: RevenueType === "Manage" ? "white" : "#4E5A6B",
                      textWrap: "nowrap",
                      borderColor: "#E4E8EE",
                    }}
                    onClick={() => setrevenuetype("Manage")}
                  >
                    Manage
                  </Button>
                  {currentcomponent.val !== "primary" ? (
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        padding: "10px 12px",
                        minWidth: "52px",
                        width: "52px",
                        height: "40px",
                        borderRadius: "4px",
                        bgcolor: RevenueType === "Stay" ? "#5078E1" : "white",
                        color: RevenueType === "Stay" ? "white" : "#4E5A6B",
                        textWrap: "nowrap",
                        borderColor: "#E4E8EE",
                      }}
                      onClick={() => setrevenuetype("Stay")}
                    >
                      Stay
                    </Button>
                  ) : null}
                </Box>
              </Box>
              <Box>
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    maxWidth: "fit-content",
                  }}
                >
                  Pricing Component
                </h1>
                <Box
                  sx={{
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "row",
                    // gap: "8px",
                    maxWidth: "fit-content",
                  }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentpricingdrop}
                    onChange={handleChange}
                    IconComponent={(props) => (
                      <Box
                        sx={{
                          marginRight: "16.3px",
                          height: "auto",
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "center",
                          marginTop: "5px",
                        }}
                        {...props}
                      >
                        <Expandedarrow
                          style={{
                            fill: "#091B29",
                            stroke: "#091B29",
                          }}
                          width={14}
                          height={7.5}
                        />
                      </Box>
                    )}
                    sx={{
                      width: "210px",
                      height: "40px",
                      bgcolor: "white",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#091B29",
                      borderRadius: "4px",
                      border: "1px solid #E4E8EE",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E4E8EE",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E4E8EE",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E4E8EE",
                      },
                    }}
                  >
                    {Pricingdropdown.map((val, i) => (
                      <MenuItem key={i} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
              <Box>
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    maxWidth: "fit-content",
                  }}
                >
                  Tax Group For Pricing Component
                </h1>
                <Box
                  sx={{
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "row",
                    // gap: "8px",
                    maxWidth: "fit-content",
                  }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentTaxdropdown}
                    onChange={(event) =>
                      setcurrentTaxdropdown(event.target.value)
                    }
                    IconComponent={(props) => (
                      <Box
                        sx={{
                          marginRight: "16.3px",
                          height: "auto",
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "center",
                          marginTop: "5px",
                        }}
                        {...props}
                      >
                        <Expandedarrow
                          style={{
                            fill: "#091B29",
                            stroke: "#091B29",
                          }}
                          width={14}
                          height={7.5}
                        />
                      </Box>
                    )}
                    sx={{
                      width: "210px",
                      height: "40px",
                      bgcolor: "white",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#091B29",
                      borderRadius: "4px",
                      border: "1px solid #E4E8EE",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E4E8EE",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E4E8EE",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E4E8EE",
                      },
                    }}
                  >
                    {Taxdropdown.map((val, i) => (
                      <MenuItem key={i} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
              {currentcomponent.val === "secondary" ||
              currentcomponent.val === "onetime" ||
              currentcomponent.val === "parking" ? (
                <Box>
                  <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                    Chargeble
                  </h1>
                  <Box
                    sx={{
                      marginTop: "8px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "7px",
                      width: "210px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        padding: "10px 12px",
                        minWidth: "46px",

                        maxWidth: "46px",
                        maxHeight: "40px",
                        borderRadius: "4px",
                        bgcolor: chargable === true ? "#5078E1" : "white",
                        color: chargable === true ? "white" : "#4E5A6B",
                        textWrap: "nowrap",
                        borderColor: "#E4E8EE",
                        boxSizing: "border-box",
                      }}
                      onClick={() => setchargable(true)}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        padding: "10px 12px",
                        minWidth: "42px",

                        maxWidth: "42px",
                        height: "40px",
                        borderRadius: "4px",
                        bgcolor: chargable === false ? "#5078E1" : "white",
                        color: chargable === false ? "white" : "#4E5A6B",
                        textWrap: "nowrap",
                        borderColor: "#E4E8EE",
                        boxSizing: "border-box",
                      }}
                      onClick={() => setchargable(false)}
                    >
                      No
                    </Button>
                  </Box>
                </Box>
              ) : null}
              {currentcomponent.val === "inventory" ? (
                <>
                  <Box sx={{ width: "436px" }}>
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Pricing Based On
                    </h1>
                    <Box
                      sx={{
                        marginTop: "8px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "7px",
                        width: "210px",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "14px",
                          padding: "10px 12px",
                          maxWidth: "67px",
                          maxHeight: "40px",
                          borderRadius: "4px",
                          bgcolor:
                            pricebasedon === "Monthly" ? "#5078E1" : "white",
                          color:
                            pricebasedon === "Monthly" ? "white" : "#4E5A6B",
                          textWrap: "nowrap",
                          borderColor: "#E4E8EE",
                          boxSizing: "border-box",
                          width: "100%",
                          height: "100%",
                        }}
                        onClick={() => setpricebasedon("Monthly")}
                      >
                        Monthly
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "14px",
                          padding: "10px 12px",
                          minWidth: "55px",

                          maxWidth: "55px",
                          height: "40px",
                          borderRadius: "4px",
                          bgcolor:
                            pricebasedon === "Total" ? "#5078E1" : "white",
                          color: pricebasedon === "Total" ? "white" : "#4E5A6B",
                          textWrap: "nowrap",
                          borderColor: "#E4E8EE",
                          boxSizing: "border-box",
                        }}
                        onClick={() => setpricebasedon("Total")}
                      >
                        Total
                      </Button>
                    </Box>
                  </Box>{" "}
                  <Box>
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Item Unit Price
                    </h1>
                    <Box
                      sx={{
                        width: "210px",
                      }}
                    >
                      <TextField
                        fullWidth
                        // label="fullWidth"
                        placeholder="Enter value"
                        id="fullWidth"
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                sx={{
                                  color: "#98A0AC",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                }}
                              >
                                <p>$</p>
                              </InputAdornment>
                            ),
                          },
                          style: {
                            height: "40px",
                          },
                        }}
                        sx={{
                          marginTop: "8px",
                          "& .MuiOutlinedInput-root": {
                            height: "40px",
                            fontFamily: "Nunito Sans",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Quantity
                    </h1>
                    <Box
                      sx={{
                        width: "210px",
                      }}
                    >
                      <TextField
                        fullWidth
                        // label="fullWidth"
                        placeholder="Enter value"
                        id="fullWidth"
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                sx={{
                                  color: "#98A0AC",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                }}
                              >
                                <p>Qty</p>
                              </InputAdornment>
                            ),
                          },
                          style: {
                            height: "40px",
                          },
                        }}
                        sx={{
                          marginTop: "8px",
                          "& .MuiOutlinedInput-root": {
                            height: "40px",
                            fontFamily: "Nunito Sans",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box>
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Component Based On
                    </h1>
                    <Box
                      sx={{
                        marginTop: "8px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "7px",
                        width: "210px",
                      }}
                    >
                      {console.log(componentbasedon)}
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "14px",
                          padding: "10px 12px",
                          maxWidth: "61px",
                          maxHeight: "40px",
                          borderRadius: "4px",
                          bgcolor:
                            componentbasedon === "Amount" ? "#5078E1" : "white",
                          color:
                            componentbasedon === "Amount" ? "white" : "#4E5A6B",
                          textWrap: "nowrap",
                          borderColor: "#E4E8EE",
                          boxSizing: "border-box",
                          width: "100%",
                          height: "100%",
                        }}
                        onClick={() => setcomponentbasedon("Amount")}
                      >
                        Amount
                      </Button>
                      {currentcomponent.val === "refundables" ? (
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: "14px",
                            padding: "10px 12px",
                            minWidth: "104px",

                            maxWidth: "104px",
                            height: "40px",
                            borderRadius: "4px",
                            bgcolor:
                              componentbasedon === "UOM" ? "#5078E1" : "white",
                            color:
                              componentbasedon === "UOM" ? "white" : "#4E5A6B",
                            textWrap: "nowrap",
                            borderColor: "#E4E8EE",
                            boxSizing: "border-box",
                          }}
                          onClick={() => setcomponentbasedon("UOM")}
                        >
                          Rental Value
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: "14px",
                            padding: "10px 12px",
                            minWidth: "60px",

                            maxWidth: "60px",
                            height: "40px",
                            borderRadius: "4px",
                            bgcolor:
                              componentbasedon === "UOM" ? "#5078E1" : "white",
                            color:
                              componentbasedon === "UOM" ? "white" : "#4E5A6B",
                            textWrap: "nowrap",
                            borderColor: "#E4E8EE",
                            boxSizing: "border-box",
                          }}
                          onClick={() => setcomponentbasedon("UOM")}
                        >
                          UOM
                        </Button>
                      )}
                      {(currentcomponent.val === "secondary" ||
                        currentcomponent.val === "onetime" ||
                        currentcomponent.val === "refundables" ||
                        currentcomponent.val === "parking") && (
                        <Button
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: "14px",
                            padding: "10px 12px",
                            minWidth: "37px",

                            maxWidth: "37px",
                            height: "40px",
                            borderRadius: "4px",
                            bgcolor:
                              componentbasedon === "%" ? "#5078E1" : "white",
                            color:
                              componentbasedon === "%" ? "white" : "#4E5A6B",
                            textWrap: "nowrap",
                            borderColor: "#E4E8EE",
                            boxSizing: "border-box",
                          }}
                          onClick={() => setcomponentbasedon("%")}
                        >
                          %
                        </Button>
                      )}
                    </Box>
                  </Box>
                  {componentbasedon === "Amount" ? (
                    <Box>
                      <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                        UOM Value
                      </h1>
                      <Box
                        sx={{
                          width: "436px",
                        }}
                      >
                        <TextField
                          fullWidth
                          // label="fullWidth"
                          placeholder="Enter value"
                          id="fullWidth"
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment
                                  position="end"
                                  sx={{
                                    color: "#98A0AC",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    fontFamily: "Nunito Sans",
                                    p: {
                                      bgcolor: "red",
                                    },
                                  }}
                                >
                                  {currentcomponent.val === "primary" ? (
                                    <p>SAR / Total</p>
                                  ) : (
                                    <p>$ / Monthly</p>
                                  )}
                                </InputAdornment>
                              ),
                            },
                          }}
                          sx={{
                            marginTop: "8px",
                            "& .MuiOutlinedInput-root": {
                              height: "40px",
                              fontFamily: "Nunito Sans",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  ) : (
                    <>
                      <Box>
                        <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                          Amount Value
                        </h1>
                        <Box
                          sx={{
                            width: "210px",
                          }}
                        >
                          <TextField
                            fullWidth
                            // label="fullWidth"
                            placeholder="Enter value"
                            id="fullWidth"
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      color: "#98A0AC",
                                      fontSize: "14px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    <p>$ / Monthly</p>
                                  </InputAdornment>
                                ),
                              },
                              style: {
                                height: "40px",
                              },
                            }}
                            sx={{
                              marginTop: "8px",
                              "& .MuiOutlinedInput-root": {
                                height: "40px",
                                fontFamily: "Nunito Sans",
                              },
                            }}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                          One Time Charges Amount*
                        </h1>
                        <Box
                          sx={{
                            width: "210px",
                          }}
                        >
                          <TextField
                            fullWidth
                            // label="fullWidth"
                            placeholder="Enter value"
                            id="fullWidth"
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      color: "#98A0AC",
                                      fontSize: "14px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    <p>$ / Monthly</p>
                                  </InputAdornment>
                                ),
                              },
                              style: {
                                height: "40px",
                              },
                            }}
                            sx={{
                              marginTop: "8px",
                              "& .MuiOutlinedInput-root": {
                                height: "40px",
                                fontFamily: "Nunito Sans",
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    </>
                  )}
                </>
              )}
              {currentcomponent.val === "primary" ? (
                <Box
                  sx={{
                    width: "436px",
                    maxHeight: "fit-content",
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "135px",
                      display: "grid",
                      gap: "6px",
                    }}
                  >
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Maximum
                    </h1>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                          backgroundColor: "#E4E8EE",
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                          borderRadius: 2,
                          backgroundColor: "#FF4B4B",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      // label="fullWidth"
                      placeholder="Enter value"
                      id="fullWidth"
                      sx={{
                        marginTop: "8px",
                        "& .MuiOutlinedInput-root": {
                          height: "40px",
                          fontFamily: "Nunito Sans",
                        },
                      }}
                    />
                    <h1 style={{ fontSize: "10px", fontWeight: 600 }}>
                      Sq. Yard/Monthly
                    </h1>
                  </Box>
                  <Box
                    sx={{
                      width: "135px",
                      display: "grid",
                      gap: "6px",
                    }}
                  >
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Recommended
                    </h1>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                          backgroundColor: "#E4E8EE",
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                          borderRadius: 2,
                          backgroundColor: "##5AC782",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      // label="fullWidth"
                      placeholder="Enter value"
                      id="fullWidth"
                      sx={{
                        marginTop: "8px",
                        "& .MuiOutlinedInput-root": {
                          height: "40px",
                          fontFamily: "Nunito Sans",
                        },
                      }}
                    />
                    <h1 style={{ fontSize: "10px", fontWeight: 600 }}>
                      Sq. Yard/Monthly
                    </h1>
                  </Box>
                  <Box
                    sx={{
                      width: "135px",
                      display: "grid",
                      gap: "6px",
                    }}
                  >
                    <h1 style={{ fontSize: "12px", fontWeight: 600 }}>
                      Minimum
                    </h1>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                          backgroundColor: "#E4E8EE",
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                          borderRadius: 2,
                          backgroundColor: "#FF9340",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      // label="fullWidth"
                      placeholder="Enter value"
                      id="fullWidth"
                      sx={{
                        marginTop: "8px",
                        "& .MuiOutlinedInput-root": {
                          height: "40px",
                          fontFamily: "Nunito Sans",
                        },
                      }}
                    />
                    <h1 style={{ fontSize: "10px", fontWeight: 600 }}>
                      Sq. Yard/Monthly
                    </h1>
                  </Box>
                </Box>
              ) : null}
              <Box
                sx={{
                  width: "436px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: currentcomponent.val !== "primary" && "8px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "black",
                    bgcolor: "white",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "11px 16px",
                    width: "80px",
                    height: "42px",
                    borderRadius: "4px",
                    borderColor: "#E4E8EE",
                  }}
                  onClick={() => {
                    setcurrentcomponent(null);
                    setInfoAnchor(null);
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "11px 16px",
                    width: "215px",
                    height: "42px",
                    borderRadius: "4px",
                    bgcolor: "#5078E1",
                    color: "white",
                    textWrap: "nowrap",
                  }}
                  onClick={createpricingcomponent}
                >
                  Create Pricing Component
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PricingTable;
