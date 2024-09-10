import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export const defaultInitialState: IAppState = {
	address: null,
	unit: "",
	addressError: null,
	date: null,
	lastUpdatedStage: 1,
	currentStage: 1,
	selectedTimeSlot: null,
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	dob: "",
	sex: "",
	pronoun: "",
	priority: false,
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
			setDate: (date) => {
				const state = get();
				set({ ...state, date: date });
			},
			setCurrentStage: (number) => {
				const state = get();
				set({ ...state, currentStage: number });
			},
			setLastUpdatedStage: (number) => {
				const state = get();
				set({ ...state, lastUpdatedStage: number });
			},
			setSelectedTimeSlot: (timeSlot) => {
				const state = get();
				set({ ...state, selectedTimeSlot: timeSlot });
			},
			setFirstName: (firstName) => {
				const state = get();
				set({ ...state, firstName: firstName });
			},
			setLastName: (lastName) => {
				const state = get();
				set({ ...state, lastName: lastName });
			},
			setPhone: (phoneNumber) => {
				const state = get();
				set({ ...state, phone: phoneNumber });
			},
			setEmail: (email) => {
				const state = get();
				set({ ...state, email: email });
			},
			setDob: (dob) => {
				const state = get();
				set({ ...state, dob: dob });
			},
			setSex: (sex) => {
				const state = get();
				set({ ...state, sex: sex });
			},
			setPronoun: (pronoun) => {
				const state = get();
				set({ ...state, pronoun: pronoun });
			},
			setPriority: (priority) => {
				const state = get();
				set({ ...state, priority: priority });
			},
		}))
	);
};
