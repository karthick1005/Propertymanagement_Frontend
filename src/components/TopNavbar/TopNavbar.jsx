import React from "react";
import "./TopNavbar.css";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Expandedarrow, NotificationIcon } from "../../assets/Icons";
// import bootstrap from "bootstrap";
const TopNavbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "54px",
        bgcolor: "#1C1C1C",
        paddingTop: "11px",
        paddingBottom: "11px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="/DNTLogo.png"
          width={115.52}
          height={22}
          alt=""
          style={{
            marginLeft: "15.24px",
          }}
          draggable={false}
        />
        <Divider
          orientation="vertical"
          // flexItem
          sx={{
            height: "17px",
            bgcolor: "#98A0AC",
            marginLeft: "10px",
            // marginRight: "10px",
          }}
        />

        <p className="TopNavbartitle">PROPERTY MANAGEMENT SOLUTION</p>
      </Box>
      <Box
        sx={{
          bgcolor: "#5D5D5D",
          borderRadius: "4px",
          width: "350px",
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
          maxHeight: "32px",
          boxSizing: "border-box",
        }}
      >
        <SearchIcon
          style={{
            fill: "#CED3DD",
            marginRight: "12px",
            // width: "14px",
            // height: "14px",
          }}
        />
        <input
          id="search-bar"
          className="text"
          variant="outlined"
          placeholder="Search"
          size="small"
          style={{
            color: "#CED3DD",
            width: "100%",
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            height: "16px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", marginRight: "16px", alignItems: "center" }}>
        <NotificationIcon />
        <Divider
          orientation="vertical"
          // flexItem
          sx={{
            height: "26px",
            bgcolor: "#E4E8EE",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: "100%",
              height: "32px",
              width: "32px",
              backgroundImage: "url(/images.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginRight: "8px",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h1 className="Username_text">Bala Ganesh</h1>
            <p className="role_text">Super Admin</p>
          </Box>
          <Box sx={{ marginLeft: "16.5px" }}>
            <Expandedarrow
              style={{
                fill: "white",
                stroke: "white",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNavbar;
