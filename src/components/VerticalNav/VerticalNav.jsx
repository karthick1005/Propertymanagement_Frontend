import React from "react";
import "./VerticalNav.css";
import { Box, Divider } from "@mui/material";
import {
  BuildingsIcon,
  DashboardIcon,
  Discussion,
  Doublesheet,
  Expandedarrow,
  Filemanager,
  Leads,
  Proficon,
  Requestticket,
  Settingicon,
  UploadIcon,
} from "../../assets/Icons";
import useStore from "../../zustand/store";
const VerticalNav = () => {
  const { Navbarstate, setNavbarstate } = useStore();
  return (
    <Box
      sx={{
        top: 54,
        position: "fixed",
        height: "calc(100vh - 54px)",
        bgcolor: "#333333",
        width: Navbarstate ? "271px" : "72.5px",
        padding: "0px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        zIndex: "5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Property Manager For <br /> Start up
          </h1>
        ) : null}
        <Box
          sx={{
            width: "26px",
            height: "26px",
            bgcolor: "#5078E1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "13px",
          }}
          onClick={() => setNavbarstate(!Navbarstate)}
        >
          <Expandedarrow
            style={{
              transform: Navbarstate ? "rotate(90deg)" : "rotate(-90deg)",
              fill: "white",
              stroke: "white",
            }}
          />
        </Box>
      </Box>
      <Divider
        // flexItem
        sx={{
          width: Navbarstate ? "223px" : "26px",
          height: "0px",
          bgcolor: "#666666",
          marginTop: "13.5px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "7px",
        }}
      >
        <Box
          sx={{
            width: "30px",
            height: "30px",
          }}
        >
          <DashboardIcon />
        </Box>

        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Dashboard
          </h1>
        ) : null}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "13px",
          cursor: "pointer",
          gap: "7px",
        }}
      >
        <Box
          sx={{
            width: "30px",
            height: "30px",
            bgcolor: "#5078E1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",

            // padding: "12px 7px",
            cursor: "pointer",
            // boxSizing: "border-box",
          }}
        >
          <Leads />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            Companies
          </h1>
        ) : null}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          <Proficon />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Owners
          </h1>
        ) : null}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          <BuildingsIcon />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Properties
          </h1>
        ) : null}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          <Requestticket />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Pricing
          </h1>
        ) : null}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Settingicon />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Setting
          </h1>
        ) : null}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          <UploadIcon />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Data Management
          </h1>
        ) : null}
      </Box>

      {/* <Box
        sx={{
          width: "24px",
          height: "24px",
          marginTop: "16px",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <Doublesheet style={{ fill: "white" }} />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          <Filemanager />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Documents
          </h1>
        ) : null}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "16.5px",
          cursor: "pointer",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          <Discussion />
        </Box>
        {Navbarstate ? (
          <h1
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#C1C5CB",
            }}
          >
            Communications
          </h1>
        ) : null}
      </Box>
    </Box>
  );
};

export default VerticalNav;
