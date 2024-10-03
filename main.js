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



  AOS.init();

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

