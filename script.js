function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`; // Random color generation
}

for (let i = 0; i < 50 ; i++) { // Number of balloons
    let ballon = document.createElement("div"); // Create div
    let mheight = Math.floor(Math.random() * window.innerHeight); // Random height
    let mwidth = Math.floor(Math.random() * window.innerWidth); // Random width
    let khelo = randomColor();
    ballon.classList.add("ballon"); // Add class
    ballon.style.left = `${mwidth}px`; // Position it horizontally
    ballon.style.bottom = "0px"; // Start off-screen
    ballon.style.backgroundColor = khelo; // Apply random color
    ballon.style.setProperty("--clr", `${khelo}`)
    // ballon.style.boxShadow = ` -2px -1px 0px 0px ${khelo}`;
    document.querySelector(".mainholi").appendChild(ballon); // Append to DOM
    ballon.style.setProperty("--mheight", `${mheight}px`); // Set CSS variable
}
