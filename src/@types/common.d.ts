export interface IAppState {
	address: string;
	unit: string;
}

export interface IAppStateActions {
	setAddress: (address: string) => void;
	setUnit: (unit: string) => void;
	setAddressError: (error: string | null) => void;
}

type AppStore = IAppState & IAppStateActions;
