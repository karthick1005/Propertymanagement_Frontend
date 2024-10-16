import { Popup } from '@mui/base/Unstable_Popup/Popup';
import { Description } from '@mui/icons-material';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
const useStore = create(devtools((set, get) => ({
    userdetails: null,
    anchor: null,
    currentselected: null,
    Popup: null,
    infoanchor: null,
    estate: null,
    Navbarstate: false,
    setuserdetails: (userdetails) => {
        set({ userdetails }, false, "Setuserdetails")
    },
    setestate: (estate) => {
        set({ estate }, false, "SetEstate")
    },
    setNavbarstate: (Navbarstate) => {
        set({ Navbarstate }, false, "setNavbarstate")
    },
    setAnchor: (anchor) => {
        set({ anchor }, false, "setAnchor")
    },
    setInfoAnchor: (infoanchor) => {
        set({ infoanchor }, false, "setInfoAnchor")
    },
    setcurrentselected: (currentselected) => {
        set({ currentselected }, false, "setcurrentselected")
    },
    setpopup: (Popup) => {
        set({ Popup }, false, "setpopup")
    },
    modifypricingtable: ({ type, val }) => {
        set((state) => ({
            ...state,
            [type]: val
        }))
    },

    setrevenuetype: ({ type, val }) => {
        set((state) => ({
            ...state,
            [type]: {
                ...state[type],
                RevenueType: val
            }
        }))
    },
    // setAmenities: ({ type, val }) => {
    //     set((state) => {
    //         let updatedAmenities;
    //         console.log(val)
    //         if (type === "add") {
    //             updatedAmenities = [...(state.Amenities || []), val];
    //         } else if (type === "remove") {
    //             updatedAmenities = state.Amenities.filter((item) => item.id !== val.id);
    //         }
    //         else if (type === "update") {
    //             updatedAmenities = state.Amenities.map((amenity) =>
    //                 amenity.id === val.id ? { ...amenity, free: val.free } : amenity
    //             );
    //         }
    //         return {
    //             ...state,
    //             Amenities: updatedAmenities,
    //         };
    //     })
    // },
    updateAmenities: (updatedAmenities) => {
        set((state) => ({
            ...state,
            // Amenities: updatedAmenities,
            estate: state.estate.map((estate) =>
                estate.id === state.currentselected.id
                    ? { ...estate, Amenities: updatedAmenities }
                    : estate
            ),
        }), false, "updateAmenities");
    },

    updateUtility: (updatedUtility) => {
        set((state) => ({
            ...state,
            // Utility: updatedUtility,
            estate: state.estate.map((estate) =>
                estate.id === state.currentselected.id
                    ? { ...estate, Utility: updatedUtility }
                    : estate
            ),
        }), false, "updateUtility");
    },
})));
window.store = useStore;

export default useStore;