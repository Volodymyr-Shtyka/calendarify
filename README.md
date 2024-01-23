# Work Day Scheduler

## Overview

The Work Day Scheduler is a simple calendar application designed to help employees manage their daily schedules
effectively. This web app runs in the browser and provides users with a clean interface to add and save important events
for each hour of the workday. The application features dynamically updated HTML and CSS powered by jQuery and leverages
the Day.js library for efficient handling of date and time.

## Preview

![Work Day Scheduler](./assets/images/screenshot.png)

## Usage

1. **Clone the Repository:**
    - Clone the repository to your local machine using the following command:
      ```
      git clone git@github.com:Volodymyr-Shtyka/calendarify.git
      ```

2. **Navigate to the Project Directory:**
    - Change into the project directory:
      ```
      cd calendarify
      ```

3. **Open the Index.html File:**
    - Open the `index.html` file in a web browser to access the Work Day Scheduler.

4. **Using the Scheduler:**
    - The current day is displayed at the top of the calendar when you open the planner.
    - Timeblocks for standard business hours are presented as you scroll down.
    - Each timeblock is color-coded based on whether it's in the past, present, or future.
    - Click on a timeblock to enter an event, and click the save button to store it in local storage.
    - Events persist between page refreshes.

## Code Structure

- **index.html:** Main HTML file providing the structure of the Work Day Scheduler.
- **style.css:** CSS file styling the appearance of the application.
- **script.js:** JavaScript file containing the logic for dynamic HTML updates, event handling, and local storage
  functionality.

## Third-Party Libraries

- **jQuery:** Used for DOM manipulation and handling events.
- **Day.js:** Library for working with dates and times in the browser.

## Notes

- The application is designed to be responsive and user-friendly.
- Explore, modify, and enhance the code to meet your preferences while ensuring the core functionality remains intact.
  Refer to code comments or documentation for assistance.

## Author

Volodymyr Shtyka

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.