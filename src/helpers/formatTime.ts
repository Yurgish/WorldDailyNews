export const formatTime = (date: Date) => {
    const LocalStringFormat: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
    };

    return date.toLocaleString("en", LocalStringFormat);
};
