interface IAppState {
	address: null | string;
	unit: string;
	addressError: null | string;
	date: Date | null;
	currentStage: number;
	lastUpdatedStage: number;
	selectedTimeSlot: string | null;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	dob: string | number;
	sex: string;
	pronoun: string;
	priority: boolean;
}

interface IAppStateActions {
	setAddress: (address: string) => void;
	setUnit: (unit: string) => void;
	setAddressError: (error: string | null) => void;
	setDate: (date: Date) => void;
	setLastUpdatedStage: (number) => void;
	setCurrentStage: (currentStage: number) => void;
	setSelectedTimeSlot: (selectedTimeSlot: string | null) => void;
	setFirstName: (firstName: string) => void;
	setLastName: (lastName: string) => void;
	setPhone: (phoneNumber: string) => void;
	setEmail: (email: string) => void;
	setDob: (dob: string) => void;
	setSex: (sex: string) => void;
	setPronoun: (pronoun: string) => void;
	setPriority: (priority: boolean) => void;
}

type AppStore = IAppState & IAppStateActions;

interface DatePickerButtonProps {
	today?: Date;
	date: Date | null;
	handleDateChange: Function;
}

interface StageProps {
	handleStageChange: Function;
	handleNextStage: Function;
}
interface PriorityModalProps {
	closeModal: Function;
	timeSlot: string;
}
