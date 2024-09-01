import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export const defaultInitialState: IAppState = {
	address: null,
	unit: "",
	addressError: null,
};

export const createAppStore = (initState: IAppState = defaultInitialState) => {
	return createStore<AppStore>()(
		devtools((set, get) => ({
			...initState,
			setAddress: (address) => {
				const state = get();
				set({ ...state, address: address });
			},
			setUnit: (unit: string) => {
				const state = get();
				set({ ...state, unit: unit });
			},
			setAddressError: (error) => {
				const state = get();
				set({ ...state, addressError: error });
			},
		}))
	);
};
