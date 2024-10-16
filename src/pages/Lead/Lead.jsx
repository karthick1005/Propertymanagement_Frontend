import React, { useEffect, useState } from "react";
import "./Lead.css";
import { Box, Button, Divider, MenuItem, Select } from "@mui/material";
import { Expandedarrow } from "../../assets/Icons";
import { Unitcard } from "../../components/UnitCard/Unitcard";
import useStore from "../../zustand/store";
import { getRequest, postRequest } from "../../utils/axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Lead = () => {
  const names = ["Casagrand"];
  const [Currentname, setcurrentname] = useState(names[0]);
  const handleChange = (event) => {
    setcurrentname(event.target.value);
  };
  const currentmenu = [
    "Add Contact",
    "Lead Details",
    "Preview and Create Lead",
    "Quotation Details",
    "Preview and Create",
  ];
  const { estate, setestate, setuserdetails, userdetails, setAnchor } =
    useStore();
  const options = { day: "numeric", month: "short", year: "2-digit" };
  const [totalamt, settotalamt] = useState(0);
  const [discountamt, setdiscountamt] = useState(0);
  const [totaltax, settotaltax] = useState(0);
  useEffect(() => {
    const fetchdata = async () => {
      let data = await getRequest("/getuserdata", { user_id: 1 });
      // console.log(data.data);
      let res = data.data;
      let estatedata = res.user_estates.map((val) => val.estate);
      delete res["user_estates"];
      setestate(estatedata);
      setuserdetails(res);
    };
    fetchdata();
  }, []);
  useEffect(() => {
    settotalamt(calculatetotal("Total"));
    setdiscountamt(calculatetotal("Discount")[0]);
    settotaltax(calculatetotal("Tax"));
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
  const calculatetotal = (type, data) => {
    let total = 0;
    if (type === "Total") {
      estate?.map((val) => {
        total += val.price;
        // console.log(total);
        listofobject.map((item) => {
          // if (item === "Amenities" && item === "Utility") {
          total +=
            val[item]?.reduce((acc, item) => acc + Number(item.price), 0) || 0;
          // } else {
          //   total += val[item]?.price || 0;
          //   console.log(val[item]);
          // }
        });
      });
      console.log(total);
      return total;
    }
    if (type === "Discount") {
      estate?.map((val) => {
        total += val.price;
        listofobject.map((item) => {
          // if (item === "Amenities" && item === "Utility") {
          total +=
            val[item]?.reduce((acc, item) => acc + Number(item.price), 0) || 0;
          // } else {
          //   total += val[item]?.price || 0;
          // }
        });
      });
      let discount = 0;
      estate?.map((val) => {
        listofobject.map((item) => {
          // if (item === "Amenities" && item === "Utility") {
          console.log(val[item]);
          discount +=
            val[item]?.reduce(
              (acc, item) => acc + (item.Discount / 100) * Number(item.price),
              0
            ) || 0;
          // } else {
          //   discount +=
          //     (val[item]?.Discount || 0 / 100) * Number(val[item]?.price || 0);
          // }
        });
      });
      return [discount, total];
    }
    if (type === "Tax") {
      estate?.map((val) => {
        total += val.price;
        // console.log(total);
        listofobject.map((item) => {
          // if (item === "Amenities" && item === "Utility") {
          total +=
            val[item]?.reduce((acc, item) => acc + Number(item.price), 0) || 0;
          // } else {
          //   total += val[item]?.price || 0;
          // }
          // console.log(total);
        });
      });
      console.log(total);
      return Number((18 / 100) * total);
    }
  };
  const deleteestate = (data) => {
    setestate(estate.filter((val) => val.id !== data.id));
  };
  const createquotation = async () => {
    const pushdata = await postRequest("/createquotation", {
      user_id: userdetails.id,
      estate,
    });

    console.log(pushdata);
  };
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#F0F2F6",
        maxHeight: "100%",
        position: "relative",
        flex: 1,
        // border: "2px solid red",
      }}
      onClick={() => setAnchor(null)}
    >
      <Box
        sx={{
          height: "44px",
          boxSizing: "border-box",
          padding: "11px 0px",
          bgcolor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              bgcolor: "#E4E8EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "13px",
              // marginTop: "16.5px",
              cursor: "pointer",
              marginLeft: "23.5px",
            }}
          >
            <Expandedarrow
              style={{
                transform: "rotate(90deg)",
                fill: "#091B29",
                stroke: "#091B29",
              }}
            />
          </Box>
          <h1 className="Content_title">Create Quotation To Existing Lead</h1>
        </Box>
        <Box>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Currentname}
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
              width: "168px",
              height: "34px",
              bgcolor: "#F5F7FA",
              boxSizing: "border-box",
              color: "black",
              borderRadius: "8px",
              marginRight: "24px",
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
            {names.map((val, i) => (
              <MenuItem key={i} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          margin: "24px",
          //   height: "calc(100% - 95px)",
          width: "calc(100% - 48px)",
          //   border: "2px solid wheat",
          //   height: "calc(100% - 58px)",
          borderRadius: "12px",
          bgcolor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            marginLeft: "24px",
            marginTop: "18px",
            color: "#5078E1",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
          className="Currentmenubar"
        >
          {currentmenu?.map((val, i) => {
            return (
              <>
                {i === currentmenu.length - 1 && i !== 0 ? (
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid #CBD7F6",
                      borderRadius: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "18px",
                        height: "18px",
                        bgcolor: "#5078E1",
                        borderRadius: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <p style={{ fontSize: "12px" }}>{i}</p>
                    </Box>
                  </Box>
                ) : null}
                <p>{val}</p>
                {i !== currentmenu.length - 1 ? (
                  <Expandedarrow
                    style={{
                      transform: "rotate(-90deg)",
                      fill: "#5078E1",
                      stroke: "#5078E1",
                    }}
                    width={8.51}
                    height={4.56}
                  />
                ) : null}
              </>
            );
          })}
        </Box>
        <Divider
          // flexItem
          sx={{
            // position: "relative",
            width: "100%",
            height: "0px",
            bgcolor: "#E4E8EE",
            marginTop: "19px",
          }}
        />
        <Box
          sx={{
            // height: "486px",
            display: "flex",
            // alignItems: "flex-start",
            justifyContent: "space-between",
            //need to check",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                marginTop: "16px",
                marginLeft: "24px",
                width: "351px",
                height: "116px",
                borderBottom: "2px solid #E4E8EE",
              }}
              className="UsercardDetails"
            >
              <h1>Lead Details</h1>
              <Box
                sx={{
                  marginTop: "16.5px",
                  border: "2px solid #E4E8EE",
                  height: "60px",
                  padding: "10px",
                  boxSizing: "border-box",
                  display: "flex",
                  gap: "12px",
                  borderRadius: "4px",
                }}
              >
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    backgroundImage: "url(/Userdetails.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "4px",
                    boxShadow: "0px 3px 16px #0000001F",
                  }}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Box
                    className="userdetails_name"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <h1>{userdetails?.username || "Tom Cruise"}</h1>
                    <Box
                      sx={{
                        color: "#091B29",
                        fontSize: "10px",
                        fontWeight: "bold",
                        bgcolor: "#5078E11E",
                        width: "50px",
                        height: "19px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "4px",
                      }}
                    >
                      <p>Prospect</p>
                    </Box>
                  </Box>
                  <Box
                    className="userdetails_name_phone"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <p>
                      {userdetails?.contry_code + " " + userdetails?.phoneno ||
                        "+91 9090808012"}
                    </p>

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
                    <p>{userdetails?.email || "Tomcruise2515@mail.com"}</p>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "16px",
                marginLeft: "24px",
                width: "351px",
                height: "116px",
              }}
              className="Quotationdetails"
            >
              <h1 id="quote_head">Quotation Details</h1>
              <Box
                sx={{
                  marginTop: "12px",
                  height: "33px",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    width: "109px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      fontWeight: 600,
                      color: "#98A0AC",
                    }}
                  >
                    LEASE START DATE
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#091B29",
                    }}
                  >
                    {new Date(userdetails?.lease_start_date).toLocaleDateString(
                      "en-GB",
                      options
                    ) || "30 Jan 22"}
                  </p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    width: "109px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      fontWeight: 600,
                      color: "#98A0AC",
                    }}
                  >
                    LEASE END DATE
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#091B29",
                    }}
                  >
                    {new Date(userdetails?.lease_end_date).toLocaleDateString(
                      "en-GB",
                      options
                    ) || "30 Jan 23"}
                  </p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    width: "109px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      fontWeight: 600,
                      color: "#98A0AC",
                    }}
                  >
                    RENT START DATE
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#091B29",
                    }}
                  >
                    {new Date(userdetails?.rent_start_date).toLocaleDateString(
                      "en-GB",
                      options
                    ) || "30 Jan 23"}
                  </p>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "12px",
                  height: "33px",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    width: "109px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      fontWeight: 600,
                      color: "#98A0AC",
                    }}
                  >
                    GRACE PERIOD
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#091B29",
                      display: "flex",
                    }}
                  >
                    {userdetails?.grace_period || "90"} Days{" "}
                    <span style={{ color: "#98A0AC" }}>(Beginning)</span>
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              marginLeft: "12px",
              minWidth: "484px",
              height: "100%",
              bgcolor: "#F5F7FAE6",
            }}
          >
            <Box
              sx={{
                marginTop: "16px",
                marginLeft: "12px",
                marginRight: "12px",
                // width: "459.5px",
                height: "469.36px",
                // border: "2px solid red",
                position: "relative",
              }}
              className="UsercardDetails"
            >
              <h1>Unit Details</h1>
              <Box
                sx={{
                  marginTop: "16.5px",
                  paddingTop: "1.5px",
                  maxHeight: "calc(469.36px - 37px)",
                  overflowX: "hidden",
                  //   border: "2px solid black",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16.5px",
                  justifyItems: "center",
                  justifyContent: "space-between",
                  scrollbarWidth: "none",
                }}
              >
                {estate?.map((val) => {
                  return <Unitcard data={val} deleteestate={deleteestate} />;
                })}
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "484px", height: "100%" }}>
            <Box
              sx={{
                marginTop: "16px",
                marginLeft: "11px",
                // width: "351px",
                height: "116px",
                borderBottom: "2px solid #E4E8EE",
                position: "relative",
                marginRight: "24px",
              }}
              className="UsercardDetails"
            >
              <h1>Quotation Summary</h1>
              <Box
                sx={{
                  marginTop: "16.5px",
                  borderRadius: "4px",
                  bgcolor: "#F5F7FA",
                  width: "100%",
                  //   width: "340px",
                  height: "434px",
                  position: "absolute",
                  textWrap: "nowrap",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      color: "#98A0AC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "10px",
                      fontWeight: "bold",
                      marginTop: "12px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      boxSizing: "border-box",
                      paddingBottom: "10.5px",
                      borderBottom: "1px solid #E4E8EE",
                    }}
                  >
                    <Box sx={{ flex: 1, textAlign: "left", width: "107px" }}>
                      <p>DESCRIPTION</p>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: "center" }}>
                      <p>QTY</p>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: "right" }}>
                      <p>AMOUNT</p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: "#4E5A6B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      marginTop: "12px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "left",
                        fontWeight: "600",
                        width: "107px",
                      }}
                    >
                      <p>Total Amount</p>
                    </Box>
                    <Box
                      sx={{ flex: 1, textAlign: "center", fontWeight: "400" }}
                    >
                      <p>{estate?.length || 3}</p>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "right",
                        fontWeight: "bold",
                        color: "#091B29",
                      }}
                    >
                      <p>$ {totalamt}.00</p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: "#4E5A6B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      boxSizing: "border-box",
                      marginTop: "12.5px",
                      paddingBottom: "12.5px",
                      borderBottom: "1px solid #E4E8EE",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "left",
                        fontWeight: "600",
                        width: "107px",
                      }}
                    >
                      <p>Total Discount</p>
                    </Box>
                    <Box
                      sx={{ flex: 1, textAlign: "center", fontWeight: "600" }}
                    >
                      <p>
                        {(
                          (calculatetotal("Discount")[0] /
                            calculatetotal("Discount")[1]) *
                          100
                        )?.toFixed("0") !== "NaN"
                          ? (
                              (calculatetotal("Discount")[0] /
                                calculatetotal("Discount")[1]) *
                              100
                            )?.toFixed("0")
                          : 0}
                        %
                      </p>
                    </Box>
                    <Box
                      sx={{ flex: 1, textAlign: "right", fontWeight: "600" }}
                    >
                      <p>- $ {discountamt}.00</p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: "#4E5A6B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      boxSizing: "border-box",
                      marginTop: "12.5px",
                      paddingBottom: "12.5px",
                      borderBottom: "1px solid #E4E8EE",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "left",
                        fontWeight: "600",
                        width: "107px",
                      }}
                    >
                      <p>Total Refundable</p>
                    </Box>
                    <Box
                      sx={{ flex: 1, textAlign: "center", fontWeight: "400" }}
                    >
                      <p>0%</p>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "right",
                        fontWeight: "bold",
                        color: "#091B29",
                      }}
                    >
                      <p>$ 0</p>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: "#4E5A6B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      boxSizing: "border-box",
                      marginTop: "12.5px",
                      paddingBottom: "12.5px",
                      borderBottom: "1px solid #E4E8EE",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "left",
                        fontWeight: "600",
                        width: "107px",
                      }}
                    >
                      <p>Total Tax</p>
                    </Box>
                    <Box
                      sx={{ flex: 1, textAlign: "center", fontWeight: "400" }}
                    >
                      <p>18%</p>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        textAlign: "right",
                        fontWeight: "bold",
                        color: "#091B29",
                      }}
                    >
                      <p>$ {totaltax}.00</p>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "#091B29",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    boxSizing: "border-box",
                    paddingTop: "12.5px",
                    borderTop: "1px solid #E4E8EE",
                    fontWeight: "bold",
                    marginBottom: "16.5px",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      textAlign: "left",
                    }}
                  >
                    <p>Quote Amount</p>
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      textAlign: "right",
                    }}
                  >
                    <p>$ {totalamt - discountamt + totaltax}.00</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "24px",
            marginTop: "16.5px",
            boxSizing: "border-box",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Box>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "14px",
                padding: "11px 16px",
                width: "88px",
                height: "40px",
                borderRadius: "8px",
                borderColor: "#E4E8EE",
              }}
            >
              Previous
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "14px",
                padding: "11px 16px",
                width: "72px",
                height: "40px",
                borderRadius: "8px",
                borderColor: "#E4E8EE",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "14px",
                padding: "11px 16px",
                width: "143px",
                height: "40px",
                borderRadius: "8px",
                bgcolor: "#5078E1",
                color: "white",
                textWrap: "nowrap",
              }}
              onClick={createquotation}
            >
              Create Quotation
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Lead;
