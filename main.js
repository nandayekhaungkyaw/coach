import 'flowbite';

// Function to get tomorrow's date in the desired format
function getTomorrowDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const day = String(tomorrow.getDate()).padStart(2, '0');
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = tomorrow.getFullYear();

    return `${month}/${day}/${year}`;
}

// Set the options for the date picker
const options = {
    defaultDatepickerId: null,
    autohide: false,
    format: 'mm/dd/yyyy',
    maxDate: "10/05/2024",
    minDate: getTomorrowDate(), // Set the minimum date to tomorrow
    orientation: 'bottom',
    buttons: false,
    autoSelectToday: false,
    title: null,
    rangePicker: false,
    onShow: () => {},
    onHide: () => {},
};

// Initialize the date picker once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const datepickerEl = document.getElementById('datepicker-custom');
    if (datepickerEl) {
        const instanceOptions = {
            id: 'datepicker-custom-example',
            ...options
        };

        // Initialize the date picker with the instance options
        const datepicker = new Datepicker(datepickerEl, instanceOptions);
        console.log(datepicker);
    } else {
        console.error('Date picker element not found.');
    }
});
