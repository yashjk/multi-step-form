export const generateDates = (today: Date) => {
	const dates = [];
	for (let i = 0; i <= 21; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() + i);
		dates.push(date);
	}
	return dates;
};

export const formatWeekDay = (date: Date) => {
	return Intl.DateTimeFormat("en-US", {
		weekday: "short",
	}).format(date);
};

export const formatMonth = (date: Date) => {
	return Intl.DateTimeFormat("en-US", {
		month: "short",
	}).format(date);
};
