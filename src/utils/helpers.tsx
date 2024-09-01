export const generateDates = (today: Date) => {
	const dates = [];
	for (let i = 0; i <= 14; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() + i);
		dates.push(date);
	}
	return dates;
};
