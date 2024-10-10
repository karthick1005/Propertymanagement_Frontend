import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <TopNavbar />
      <VerticalNav />
      <Box
        sx={{
          marginLeft: "71.5px",
          marginTop: "54px",
          height: "calc(100vh - 54px)",
          width: "calc(100vw - 71.5px)",
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </>
  );
}
