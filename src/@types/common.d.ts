interface IAppState {
	address: null | string;
	unit: string;
	addressError: null | string;
	date: Date | null;
	currentStage: number;
	lastUpdatedStage: number;
	selectedTimeSlot: string | null;
}

interface IAppStateActions {
	setAddress: (address: string) => void;
	setUnit: (unit: string) => void;
	setAddressError: (error: string | null) => void;
	setDate: (date: Date) => void;
	setLastUpdatedStage: (number) => void;
	setCurrentStage: (number) => void;
	setSelectedTimeSlot: (string) => void;
}

type AppStore = IAppState & IAppStateActions;

interface DatePickerButtonProps {
	today?: Date;
	date: Date | null;
	handleDateChange: Function;
}

interface stageProps {
	handleStageChange: Function;
}
