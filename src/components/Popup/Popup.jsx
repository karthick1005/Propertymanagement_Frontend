import { Modal } from "@mui/base";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useStore from "../../zustand/store";
import Backdrop from "@mui/material/Backdrop";
import PricingTable from "../PricingTable/PricingTable";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import styled from "@emotion/styled";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  border: "1px solid #E4E8EE",
  backgroundColor: "#fff",
  boxShadow: "0px 10px 25px #0000000A",
  borderRadius: "8px",
  boxSizing: "border-box",
  zIndex: "5",
};
const PopupBody = styled("div")({
  width: "297px",
  height: "56px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #E4E8EE",
  backgroundColor: "#fff",
  boxShadow: "0px 10px 25px #0000000A",
  boxSizing: "border-box",
});
const Popup = () => {
  const { Popup, setpopup, infoanchor, setInfoAnchor } = useStore();
  const handleClose = () => setOpen(false);
  const open = Boolean(infoanchor);
  const id = open ? "simple-popper" : undefined;
  useEffect(() => {
    if (Popup == null) {
      setInfoAnchor(null);
    }
  }, [Popup]);
  return (
    <Modal
      open={Popup !== null}
      onClose={() => setpopup(null)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      //   sx={{ border: "2px solid red" }}

      slots={{ backdrop: Backdrop }}
    >
      <Box sx={style}>
        {Popup}
        <BasePopup
          id={id}
          open={open}
          anchor={infoanchor}
          offset={0}
          placement="top"
          className="InfoPopup"
        >
          <PopupBody>
            <Box
              sx={{
                cursor: "pointer",
                color: "#4E5A6B",
                fontSize: "12px",
                fontWeight: 600,
                textAlign: "left",
                wordSpacing: "-1px",
              }}
            >
              Base rent or monthly rental amount. you can have only one primary
              pricing component per property.
            </Box>
          </PopupBody>
        </BasePopup>
      </Box>
    </Modal>
  );
};

export default Popup;
