document.addEventListener("DOMContentLoaded", () => {
    let opacity = 1; // Initialize opacity variable

    // Create the square div
    const square = document.createElement('div');
    square.id = 'mySquare';
    square.style.position = 'absolute';
    square.style.top = "0";
    square.style.left = "0";
    square.style.width = '100%';
    square.style.height = '20vh';
    square.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.1))';
    square.style.opacity = opacity; // Set initial opacity

    // Create the background image
    const Background = new Image();
    Background.src = "Background.jpg";
    Background.style.position = "absolute";
    Background.style.top = "0";
    Background.style.left = "0";
    Background.style.width = "100%"; 
    Background.style.height = "100%"; 
    Background.style.objectFit = "cover"; 
    Background.style.zIndex = "-1";

    // Create the logo image
    const Logo = new Image();
    Logo.src = "Logo_1.png";
    Logo.style.position = "fixed";
    Logo.style.top = "10px"; 
    Logo.style.left = "10px"; 
    Logo.style.width = "100px"; 
    Logo.style.height = "70px"; 
    Logo.style.opacity = "1"; // Default opacity

    const Cat = new Image();
    Cat.src = "Cat.png";
    Cat.style.position = "fixed"; // Use fixed positioning
    Cat.style.top = "100px"; // Position from the top
    Cat.style.left = "30%"; // Position from the left
    Cat.style.width = "66%"; // Fixed width in pixels
    Cat.style.height = "84%"; // Fixed height in pixels
    Cat.style.transition = "opacity 1s ease, transform 1s ease";
    Cat.style.transform = "translateY(5%)";
    Cat.style.opacity = "0";


    const slideButton = document.createElement('div');
    slideButton.id = 'slideButton';
    slideButton.innerText = 'Select Me'; // Button text
    slideButton.style.position = 'absolute'; // Position it relative to the square
    slideButton.style.left = '50%'; // Center horizontally
    slideButton.style.transform = 'translateX(-50%)'; // Centering
    slideButton.style.padding = '10px 20px'; // Button padding
    slideButton.style.color = "white";
    slideButton.style.transition = "bottom 0.3s ease, opacity 0.3s ease";

    const TitleDiv = document.createElement('div');
    TitleDiv.id = 'Title';
    TitleDiv.innerText = 'Let\'s Read'; // Button text
    TitleDiv.style.position = 'absolute'; // Position it relative to the square
    TitleDiv.style.top = '40%'; // Position from the top
    TitleDiv.style.left = '30%'; // Center horizontally
    TitleDiv.style.transform = 'translateX(-50%)'; // Adjust for centering
    TitleDiv.style.opacity = '0'; // Start invisible
    TitleDiv.style.transform = 'translate(-50%, 20px)'; // Start below the center
    TitleDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    TitleDiv.style.color = "white";
    TitleDiv.style.fontSize = '70px'; 
    TitleDiv.style.fontWeight = 'bold';
    TitleDiv.style.textShadow = '1px 1px 0 rgba(0, 0, 0, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.8), 1px -1px 0 rgba(0, 0, 0, 0.8), -1px 1px 0 rgba(0, 0, 0, 0.8)'; // Thin outline effect


    square.addEventListener('click', function() {
	if (opacity < 1) opacity += 0.1; // Increase opacity on hover
            square.style.opacity = opacity; // Apply the new opacity
            slideButton.style.bottom = '90%'; // Slide down
            slideButton.style.opacity = '1'; // Fade in
            slideButton.style.visibility = 'visible'; // Make it visible
	});

    document.addEventListener('mousemove', (event) => {
        const mouseY = event.clientY; // Get Y coordinate of the mouse
        const squareBottom = square.getBoundingClientRect().bottom; // Get the bottom position of the square

        if (mouseY < squareBottom) {
            if (opacity < 1) opacity += 0.1; // Increase opacity on hover
            square.style.opacity = opacity; // Apply the new opacity
            slideButton.style.bottom = '90%'; // Slide down
            slideButton.style.opacity = '1'; // Fade in
            slideButton.style.visibility = 'visible'; // Make it visible
	    
        } else {
            if (opacity > 0.5) opacity -= 0.1; // Reset opacity when not hovering
            square.style.opacity = opacity; // Apply the new opacity
            slideButton.style.bottom = '100%'; // Slide up
            slideButton.style.opacity = '0'; // Fade out
        }
    });

    
    function adjustCatStyles() {
    // Check the window width and set styles accordingly
    if (window.innerWidth >= 768) { // Adjust the width as necessary for your breakpoint
        Cat.style.opacity = "1"; // Change opacity to 1 for fade-in effect
        Cat.style.transform = "translateY(0)";
        Cat.style.top = "100px"; // Position from the top
        Cat.style.left = "30%"; // Position from the left
        Cat.style.width = "66%"; // Fixed width
        Cat.style.height = "84%"; // Fixed height
        TitleDiv.style.opacity = '1'; // Fade in
        TitleDiv.style.transform = 'translate(-50%, 0)';
    } else {
        Cat.style.opacity = "1"; // Change opacity to 1 for fade-in effect
        Cat.style.transform = "translateY(0)";
        Cat.style.top = "170px"; // Position from the top
        Cat.style.left = "10%"; // Position from the left
        Cat.style.width = "110%"; // Fixed width
        Cat.style.height = "34%"; // Fixed height
        TitleDiv.style.opacity = '1'; // Fade in
        TitleDiv.style.transform = 'translate(-50%, 0)';
        TitleDiv.style.fontSize = '30px';
    		}
	}

	// Call the function after a timeout
	setTimeout(adjustCatStyles, 100);

	// Optionally, call it on window resize to adjust styles dynamically
	window.addEventListener('resize', adjustCatStyles);




    // Append elements to the body
    document.body.appendChild(Background);
    document.body.appendChild(square);
    document.body.appendChild(Logo);
    document.body.appendChild(Cat);
    document.body.appendChild(slideButton);
    document.body.appendChild(TitleDiv);
});
