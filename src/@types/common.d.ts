interface IAppState {
	address: null | string;
	unit: string;
	addressError: null | string;
}

interface IAppStateActions {
	setAddress: (address: string) => void;
	setUnit: (unit: string) => void;
	setAddressError: (error: string | null) => void;
}

type AppStore = IAppState & IAppStateActions;

interface DatePickerButtonProps {
	date: Date | null;
	handleDateChange: Function;
}
