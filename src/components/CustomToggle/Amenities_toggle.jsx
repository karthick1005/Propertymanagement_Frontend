// import styled from "@emotion/styled";
// import { Box, Checkbox, FormControlLabel, Switch } from "@mui/material";
// import React from "react";
// import { BpCheckedIcon, BpIcon } from "../Materialui/components";
// import useStore from "../../zustand/store";
// const Android12Switch = styled(Switch)(() => ({
//   padding: 8,
//   //   height: "20px",
//   //   width: "36px",
//   "& .MuiSwitch-track": {
//     borderRadius: 22 / 2,
//     backgroundColor: "#E4E8EE",
//     "&::before, &::after": {
//       content: '""',
//       position: "absolute",
//       top: "50%",
//       transform: "translateY(-50%)",
//       width: 16,
//       height: 16,
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     color: "#98A0AC",
//     boxShadow: "none",
//     width: 16,
//     height: 16,
//     margin: 2,
//   },
//   "& .MuiSwitch-switchBase": {
//     // padding: 2,
//     "&.Mui-checked": {
//       "& + .MuiSwitch-track": {
//         backgroundColor: "#EEF9EE",
//         opacity: 1,
//       },
//       "& .MuiSwitch-thumb": {
//         backgroundColor: "#5AC782",
//       },
//     },
//   },
// }));

// const Amenities_toggle = ({ item }) => {
//   const { Amenities, setAmenities } = useStore();
//   return (
//     <Box
//       sx={{
//         // height: "60px",
//         border: "1px solid #E4E8EE",
//         borderRadius: "6px",
//         width: "100%",
//         // padding: "8px",
//         boxSizing: "border-box",
//         display: "flex",
//         flexDirection: "column",
//         // alignItems: "center",
//         // justifyContent: "space-between",
//       }}
//     >
//       <Box
//         sx={{
//           padding: "8px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box sx={{ display: "flex" }}>
//           <img
//             src="/amenities.jpg"
//             style={{
//               width: "44px",
//               height: "44px",
//               borderRadius: "4px",
//             }}
//             alt=""
//           />
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "6px",
//               marginLeft: "8px",
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 color: "#091B29",
//               }}
//             >
//               {item.name}
//             </h1>
//             <Box
//               className="userdetails_name_phone"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 color: "#4E5A6B",
//                 fontWeight: "600",
//                 fontSize: "12px",
//               }}
//             >
//               <p>$ {item.price}</p>

//               <Box
//                 sx={{
//                   color: "#091B29",
//                   fontSize: "10px",
//                   fontWeight: "bold",
//                   bgcolor: "#E4E8EE",
//                   width: "6px",
//                   height: "6px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: "100%",
//                 }}
//               />
//               <p>Valid {item.valid}</p>
//             </Box>
//           </Box>
//         </Box>
//         {console.log(Amenities)}
//         <FormControlLabel
//           sx={{ margin: 0 }}
//           control={
//             <Android12Switch
//               checked={
//                 (Amenities?.length > 0 &&
//                   Amenities.every((val) => val.id === item.id)) ||
//                 false
//               }
//               onChange={() => {
//                 let type =
//                   Amenities?.length > 0 &&
//                   Amenities.every((val) => val.id === item.id)
//                     ? "remove"
//                     : "add";
//                 setAmenities({ type, val: { ...item, free: false } });
//               }}
//             />
//           }
//         />
//       </Box>
//       {Amenities?.length > 0 && Amenities.every((val) => val.id === item.id) ? (
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             padding: "8px",
//             borderTop: "1px solid #E4E8EE",
//           }}
//         >
//           <Checkbox
//             checked={
//               Amenities?.find((val) => (val.id = item.id))?.free || false
//             }
//             onChange={() => {
//               setAmenities({
//                 type: "update",
//                 val: {
//                   ...item,
//                   free: !Amenities?.find((val) => (val.id = item.id)).free,
//                 },
//               });
//             }}
//             inputProps={{ "aria-label": "controlled" }}
//             checkedIcon={<BpCheckedIcon />}
//             icon={<BpIcon />}
//             sx={{
//               padding: 0,
//             }}
//           />
//           <h1
//             style={{
//               fontSize: "12px",
//               fontWeight: 600,
//               color: "#4E5A6B",
//               marginLeft: "24px",
//             }}
//           >
//             Free applicability
//           </h1>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };

// export default Amenities_toggle;
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Checkbox, FormControlLabel, Switch } from "@mui/material";
import { BpCheckedIcon, BpIcon } from "../Materialui/components";
import useStore from "../../zustand/store";

const Android12Switch = styled(Switch)(() => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "#E4E8EE",
  },
  "& .MuiSwitch-thumb": {
    color: "#98A0AC",
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: "#EEF9EE",
        opacity: 1,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: "#5AC782",
      },
    },
  },
}));

const CustomToggle = ({ item, localitems, setlocalitems, type }) => {
  //   const { Amenities, setAmenities } = useStore();

  // Step 1: Track local state for modifications

  // Handle switch change locally
  const handleSwitchChange = () => {
    let localtype = localitems.some((val) => val.id === item.id)
      ? "remove"
      : "add";
    if (localtype === "add") {
      setlocalitems([
        ...localitems,
        { ...item, ...(type === "Amenities" && { free: false }) },
      ]);
    } else {
      setlocalitems(localitems.filter((val) => val.id !== item.id));
    }
  };

  // Handle free checkbox change locally
  const handleCheckboxChange = () => {
    setlocalitems(
      localitems.map((val) =>
        val.id === item.id
          ? { ...val, ...(type === "Amenities" && { free: !val.free }) }
          : val
      )
    );
  };

  // Step 2: Save changes to Zustand store when Save button is clicked
  const handleSave = () => {
    setAmenities({
      type: "update",
      val: localitems,
    });
  };

  return (
    <Box
      sx={{
        border: "1px solid #E4E8EE",
        borderRadius: "6px",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            src="/amenities.jpg"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "4px",
            }}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginLeft: "8px",
            }}
          >
            <h1
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#091B29",
              }}
            >
              {item.name}
            </h1>
            <Box
              className="userdetails_name_phone"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#4E5A6B",
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              <p>$ {item.price}</p>
              <Box
                sx={{
                  color: "#091B29",
                  fontSize: "10px",
                  fontWeight: "bold",
                  bgcolor: "#E4E8EE",
                  width: "6px",
                  height: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                }}
              />
              <p>Valid {item.valid}</p>
            </Box>
          </Box>
        </Box>

        <FormControlLabel
          sx={{ margin: 0 }}
          control={
            <Android12Switch
              checked={localitems.some((val) => val.id === item.id)}
              onChange={handleSwitchChange} // Local update
            />
          }
        />
      </Box>

      {type === "Amenities" && (
        <>
          {localitems.some((val) => val.id === item.id) ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderTop: "1px solid #E4E8EE",
              }}
            >
              <Checkbox
                checked={
                  localitems.find((val) => val.id === item.id)?.free || false
                }
                onChange={handleCheckboxChange} // Local update
                inputProps={{ "aria-label": "controlled" }}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                sx={{
                  padding: 0,
                }}
              />
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#4E5A6B",
                  marginLeft: "24px",
                }}
              >
                Free applicability
              </h1>
            </Box>
          ) : null}
        </>
      )}
    </Box>
  );
};

export default CustomToggle;
