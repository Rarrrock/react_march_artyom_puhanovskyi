import {create} from "zustand";
import {StoreType} from "../models/StoreType";

export let useStore = create<StoreType>((set) => ({
        counter: 0,
        inc: () => {
            set((state) => ({counter: state.counter + 1}));
        },
        dec: () => {
            set((state) => ({counter: state.counter - 1}));


        }
    }
));