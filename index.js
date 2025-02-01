function addingEventListener() {
    // Select the button element by its ID
    const input = document.getElementById('button');

    // Define the event listener function
    function clickAlert() {
        alert('I was clicked!');
    }

    // Attach the event listener to the button
    input.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
addingEventListener();
