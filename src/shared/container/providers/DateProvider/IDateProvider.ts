interface IDateProvider {
  convertToUTC(date: Date): string;
  compareInHours(start_date: Date, end_date: Date): number;
  currentDate(): Date;
}

export { IDateProvider };
