$(document).ready(function () {
    // Display the current day in the header
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

    // Dynamically generate timeblocks for the workday
    function generateTimeblocks() {
        var timeblocksList = $(".timeblocks-list");
        var timeStart = 9;
        var timeEnd = 17;

        for (var hour = timeStart; hour <= timeEnd; hour++) {
            // Create a new time block element
            var timeblock = $("<div>").addClass("row align-content-center time-block past");

            // Create elements for hour, textarea, and save button
            var hourDiv = $("<div>").addClass("col hour").text(formatTime(hour));
            var textArea = $("<textarea>").addClass("col description").attr("id", `description-${hour}`);
            var saveBtn = $("<button>").addClass("col saveBtn").html('<i class="fas fa-save"></i>');

            // Append elements to the time block
            timeblock.append(hourDiv, textArea, saveBtn);

            // Append the time block to the container
            timeblocksList.append(timeblock);
        }
    }

    // Format the time to display as AM/PM
    function formatTime(hour) {
        return hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
    }

    // Initialize the page with generated time blocks
    generateTimeblocks();
})