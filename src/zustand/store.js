import { Popup } from '@mui/base/Unstable_Popup/Popup';
import { Description } from '@mui/icons-material';
import { create } from 'zustand';

const useStore = create((set, get) => ({
    anchor: null,
    currentselected: null,
    Popup: null,
    infoanchor: null,
    estate: [{ id: 1 }, { id: 2 }],

    setAnchor: (anchor) => {
        set({ anchor })
    },
    setInfoAnchor: (infoanchor) => {
        set({ infoanchor })
    },
    setcurrentselected: (currentselected) => {
        set({ currentselected })
    },
    setpopup: (Popup) => {
        set({ Popup })
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
    setAmenities: ({ type, val }) => {
        set((state) => {
            let updatedAmenities;
            console.log(val)
            if (type === "add") {
                updatedAmenities = [...(state.Amenities || []), val];
            } else if (type === "remove") {
                updatedAmenities = state.Amenities.filter((item) => item.id !== val.id);
            }
            else if (type === "update") {
                updatedAmenities = state.Amenities.map((amenity) =>
                    amenity.id === val.id ? { ...amenity, free: val.free } : amenity
                );
            }
            return {
                ...state,
                Amenities: updatedAmenities,
            };
        })
    },
    updateAmenities: (updatedAmenities) => {
        set((state) => ({
            ...state,
            // Amenities: updatedAmenities,
            estate: state.estate.map((estate) =>
                estate.id === state.currentselected
                    ? { ...estate, Amenities: updatedAmenities }
                    : estate
            ),
        }));
    },
    updateUtility: (updatedUtility) => {
        set((state) => ({
            ...state,
            // Utility: updatedUtility,
            estate: state.estate.map((estate) =>
                estate.id === state.currentselected
                    ? { ...estate, Utility: updatedUtility }
                    : estate
            ),
        }));
    },
}));

export default useStore;