import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export const defaultInitialState: IAppState = {
	address: "",
	unit: "",
};

export const createAppStore = (initState: IAppState = defaultInitialState) => {
	return createStore<AppStore>()(
		devtools((set, get) => ({
			...initState,
			setAddress: (address: string) => {
				const state = get();
				set({ ...state, address: address });
			},
			setUnit: (unit: string) => {
				const state = get();
				set({ ...state, unit: unit });
			},
		}))
	);
};
