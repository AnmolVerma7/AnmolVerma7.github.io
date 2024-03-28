const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

let interval = null;

function startAnimation() {
  const header = document.querySelector("h1");
  
  let iteration = -0.01;
  let direction = 1; // Direction: 1 for forward, -1 for backward
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    // Calculate the current index for the animation based on iteration
    let currentIndex = Math.floor(iteration);
    
    header.innerText = header.dataset.value
      .split("")
      .map((char, index) => {
      
        // Decide whether to show the actual character or a random letter
        if (direction === 1 && index <= iteration) {
          return char; // Forward direction: reveal characters up to currentIndex
        } else if (direction === -1 && index >= currentIndex) {
          return char; // Backward direction: reveal characters from currentIndex backwards
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    
    iteration += 0.1 * direction; // Increment or decrement iteration based on direction
    
    //Check if the animation needs to reverse direction
    if (iteration >= header.dataset.value.length && direction === 1) {
      direction = -1; // Change direction to backward
      iteration = header.dataset.value[index] - 0.1; // Adjust to start the backward animation smoothly
    } else if (iteration <= 0 && direction === -1) {
      direction = 1; // Change direction to forward
      iteration = 0; // Reset iteration for the next cycle
      clearInterval(interval);
      setTimeout(startAnimation, 7000); // Restart animation after a 1 second delay
      
    }
  }, 25);
}

// Call the function to start the animation
window.onload = startAnimation;