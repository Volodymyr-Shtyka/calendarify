$(document).ready(function () {
    // Display the current day in the header
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

})