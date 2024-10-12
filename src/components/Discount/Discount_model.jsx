import { Box, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { Expandedarrow } from "../../assets/Icons";

const Discount_model = () => {
  const names = ["AED", "%"];
  const [Currentname, setcurrentname] = useState(names[0]);
  const handleChange = (event) => {
    setcurrentname(event.target.value);
  };
  return (
    <Box
      sx={{
        height: "62.5px",
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
        <h1
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#4E5A6B",
          }}
        >
          $1,000
        </h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <h1
          style={{
            fontSize: "14px",
            color: "#98A0AC",
            fontStyle: "italic",
            fontWeight: "400",
          }}
        >
          Discount
        </h1>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="outlined-basic"
            // label="Outlined"
            variant="outlined"
            placeholder="100,00"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "59.5px",
                height: "22px",
                fontFamily: "Nunito Sans",
                borderRadius: "0px",
                fontSize: "12px",
                fontWeight: "bold",
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E4E8EE",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E4E8EE",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E4E8EE",
              },
              "& .MuiInputBase-input": {
                padding: "1px !important",
              },
            }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Currentname}
            onChange={handleChange}
            IconComponent={(props) => (
              <Box
                sx={{
                  //   marginRight: "16.3px",
                  height: "auto",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  marginTop: "2.5px",
                }}
                {...props}
              >
                <Expandedarrow
                  style={{
                    fill: "#091B29",
                    stroke: "#091B29",
                  }}
                  width={12}
                  height={6.5}
                />
              </Box>
            )}
            sx={{
              width: "59.5px",
              height: "22px",
              bgcolor: "#F5F7FA",
              boxSizing: "border-box",
              color: "black",
              fontSize: "12px",
              fontWeight: "bold",
              borderRadius: "0px",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E4E8EE",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E4E8EE",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E4E8EE",
              },
              "& .MuiInputBase-input": {
                padding: "4px !important",
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
    </Box>
  );
};

export default Discount_model;
