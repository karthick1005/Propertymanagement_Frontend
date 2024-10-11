import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import { Box } from "@mui/material";
import { HideImage } from "@mui/icons-material";
import Popup from "./components/Popup/Popup";

export default function App() {
  return (
    <>
      <Popup />
      <TopNavbar />
      <VerticalNav />
      <Box
        sx={{
          marginLeft: "71.5px",
          marginTop: "54px",
          // height: "100%",
          height: "calc(100vh - 60px)",
          // width:"calc(100vw - 54px)"
          width: "calc(100vw - 75.5px)",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </>
  );
}
