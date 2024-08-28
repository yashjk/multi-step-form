export interface IAppState {
	address: string;
	unit: string;
}

export interface IAppStateActions {
	setAddress: (address: string) => string;
	setUnit: (unit: string) => string;
}

type AppStore = IAppState & IAppStateActions;
