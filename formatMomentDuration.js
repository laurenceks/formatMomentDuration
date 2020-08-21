function formatTimeLabel(timeInSeconds) {
    //converts a time into HH:mm:ss using moment.js
    let timeLabelString = "";
    const reformatMoment = moment(0).days(0).hours(0).minutes(0).seconds(0).millisecond(0).add(timeInSeconds, "seconds");
    if (reformatMoment.hours() === 0 && timeInSeconds < 86400) {
        timeLabelString = reformatMoment.format("mm:ss")
    } else if (reformatMoment.hours() >= 1 && reformatMoment.days() < 1 && timeInSeconds < 86400) {
        timeLabelString = reformatMoment.format("HH:mm:ss")
    } else if (timeInSeconds > 86400) {
        timeLabelString = Math.floor(timeInSeconds / 3600) + reformatMoment.format(":mm:ss")
    }
    return timeLabelString;
}