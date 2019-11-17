/* eslint-disable quotes */
import differenceInMonths from "date-fns/differenceInMonths";
import { format, getDate } from "date-fns";
import parseISO from "date-fns/parseISO";

export const DESTINATION = {
    orlandoFlorida: "Orlando",
    newYork: "New York"
};

export const AIRPORT = {
    LondonGatwick: "London Gatwick",
    Gatwick: "LGW"
};

export const DURATION = {
    fiveNigths: 5,
    sevenNigths: 7
};

export const getTravelDate = date => {
    const todaysDate = new Date();
    const depatureDate = new Date(parseISO(date));
    const travelDate = format(depatureDate, "EEE dd MMM yyyy");
    const travelCalendarDay = getDate(depatureDate) - 1;
    const nosOfMonths = differenceInMonths(depatureDate, todaysDate);

    return [travelCalendarDay, nosOfMonths, travelDate];
};
