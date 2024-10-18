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


    const Home = document.createElement('div');
    Home.id = 'Home';
    Home.innerText = 'Home'; // Button text
    Home.style.position = 'absolute'; // Position it relative to the square
    Home.style.left = '50%'; // Center horizontally
    Home.style.transform = 'translateX(-50%)'; // Centering
    Home.style.padding = '10px 20px'; // Button padding
    Home.style.color = "white";
    Home.style.transition = "bottom 0.3s ease, opacity 0.3s ease";

    const About = document.createElement('div');
    About.id = 'About';
    About.innerText = 'About'; // Button text
    About.style.position = 'absolute'; // Position it relative to the square
    About.style.left = '60%'; // Center horizontally
    About.style.transform = 'translateX(-50%)'; // Centering
    About.style.padding = '10px 20px'; // Button padding
    About.style.color = "white";
    About.style.transition = "bottom 0.3s ease, opacity 0.3s ease";

    const Programs = document.createElement('div');
    Programs.id = 'Programs';
    Programs.innerText = 'Programs'; // Button text
    Programs.style.position = 'absolute'; // Position it relative to the square
    Programs.style.left = '70%'; // Center horizontally
    Programs.style.transform = 'translateX(-50%)'; // Centering
    Programs.style.padding = '10px 20px'; // Button padding
    Programs.style.color = "white";
    Programs.style.transition = "bottom 0.3s ease, opacity 0.3s ease";

    const TitleDiv = document.createElement('div');
    TitleDiv.id = 'Title';
    TitleDiv.innerText = 'Magbasa Mag-explore'; // Button text
    TitleDiv.style.position = 'absolute'; // Position it relative to the square
    TitleDiv.style.top = '30%'; // Position from the top
    TitleDiv.style.left = '30%'; // Center horizontally
    TitleDiv.style.transform = 'translateX(-50%)'; // Adjust for centering
    TitleDiv.style.opacity = '0'; // Start invisible
    TitleDiv.style.transform = 'translate(-50%, 20px)'; // Start below the center
    TitleDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    TitleDiv.style.color = "white";
    TitleDiv.style.fontFamily = "Arial";
    TitleDiv.style.fontSize = '50px'; 
    TitleDiv.style.fontWeight = 'bold';
    TitleDiv.style.textShadow = '2px 2px 0 rgba(0, 0, 0, 0.8), -2px -2px 0 rgba(0, 0, 0, 0.8), 2px -2px 0 rgba(0, 0, 0, 0.8), -2px 2px 0 rgba(0, 0, 0, 0.8)'; // Thin outline effect

    const TitleDiv1 = document.createElement('div');
    TitleDiv1.id = 'Title';
    TitleDiv1.innerText = 'Magimagine'; // Button text
    TitleDiv1.style.position = 'absolute'; // Position it relative to the square
    TitleDiv1.style.top = '40%'; // Position from the top
    TitleDiv1.style.left = '30%'; // Center horizontally
    TitleDiv1.style.transform = 'translateX(-50%)'; // Adjust for centering
    TitleDiv1.style.opacity = '0'; // Start invisible
    TitleDiv1.style.transform = 'translate(-50%, 20px)'; // Start below the center
    TitleDiv1.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    TitleDiv1.style.color = "white";
    TitleDiv1.style.fontFamily = "Arial";
    TitleDiv1.style.fontSize = '90px'; 
    TitleDiv1.style.fontWeight = 'bold';
    TitleDiv1.style.textShadow = '2px 2px 0 rgba(0, 0, 0, 0.8), -2px -2px 0 rgba(0, 0, 0, 0.8), 2px -2px 0 rgba(0, 0, 0, 0.8), -2px 2px 0 rgba(0, 0, 0, 0.8)'; // Thin outline effect


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
            Home.style.bottom = '90%'; // Slide down
            Home.style.opacity = '1'; // Fade in
            Home.style.visibility = 'visible'; // Make it visible
	    setTimeout(() => {
        	About.style.bottom = '90%'; // Slide down
        	About.style.opacity = '1'; // Fade in
        	About.style.visibility = 'visible'; // Make it visible
    		}, 50);
	    setTimeout(() => {
        	Programs.style.bottom = '90%'; // Slide down
        	Programs.style.opacity = '1'; // Fade in
        	Programs.style.visibility = 'visible'; // Make it visible
    		}, 100);
	    
        } else {
            if (opacity > 0.5) opacity -= 0.1; // Reset opacity when not hovering
            square.style.opacity = opacity; // Apply the new opacity
            Home.style.bottom = '100%'; // Slide up
            Home.style.opacity = '0'; // Fade out
            setTimeout(() => {
	    	About.style.bottom = '100%'; // Slide up
            	About.style.opacity = '0'; // Fade out
		}, 50);
	    setTimeout(() => {
	    	Programs.style.bottom = '100%'; // Slide up
            	Programs.style.opacity = '0'; // Fade out
		}, 100);
        }
    });

    
    function adjustCatStyles() {
    // Check the window width and set styles accordingly
    if (window.innerWidth >= 768) { // Adjust the width as necessary for your breakpoint
        Cat.style.opacity = "1"; // Change opacity to 1 for fade-in effect
        Cat.style.transform = "translateY(0)";
        Cat.style.top = "100px"; // Position from the top
        Cat.style.left = "50%"; // Position from the left
        Cat.style.width = "35%"; // Fixed width
        Cat.style.height = "84%"; // Fixed height
  	TitleDiv.style.left = '30%';
        TitleDiv.style.opacity = '1'; // Fade in
	TitleDiv.style.fontSize = '50px'; 
        TitleDiv.style.transform = 'translate(-50%, 0)';
	TitleDiv1.style.left = '30%';
    	TitleDiv1.style.fontSize = '90px'; 
        TitleDiv1.style.opacity = '1'; // Fade in
        TitleDiv1.style.transform = 'translate(-50%, 0)';
    } else {
        Cat.style.opacity = "1"; // Change opacity to 1 for fade-in effect
        Cat.style.transform = "translateY(0)";
        Cat.style.top = "170px"; // Position from the top
        Cat.style.left = "0%"; // Position from the left
        Cat.style.width = "110%"; // Fixed width
        Cat.style.height = "54%"; // Fixed height
	TitleDiv.style.left = '50%';
        TitleDiv.style.opacity = '1'; // Fade in
	TitleDiv.style.fontSize = '30px'; 
        TitleDiv.style.transform = 'translate(-50%, 0)';
        TitleDiv.style.fontSize = '30px';
	TitleDiv.style.zIndex = "1";
	TitleDiv1.style.left = '50%'
	TitleDiv1.style.fontSize = '50px'; ;
        TitleDiv1.style.opacity = '1'; // Fade in
        TitleDiv1.style.transform = 'translate(-50%, 0)';
	TitleDiv1.style.zIndex = "1";
    		}
	}

	// Call the function after a timeout
	setTimeout(adjustCatStyles, 100);

	// Optionally, call it on window resize to adjust styles dynamically
	window.addEventListener('resize', adjustCatStyles);

 
	function updateDimensions() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        dimensionDiv.innerText = `Width: ${width}px, Height: ${height}px`;
    	}

	const dimensionDiv = document.createElement('div');
    dimensionDiv.id = 'dimensionDiv';
    
    // Apply styles directly in JavaScript
    dimensionDiv.style.position = 'fixed';
    dimensionDiv.style.bottom = '20px';
    dimensionDiv.style.right = '20px';
    dimensionDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    dimensionDiv.style.color = 'white';
    dimensionDiv.style.padding = '10px';
    dimensionDiv.style.borderRadius = '5px';
    dimensionDiv.style.fontSize = '16px';
    dimensionDiv.style.zIndex = '1000'; // Ensure it's on top

    // Initial call to set dimensions
    updateDimensions();

    // Append elements to the body
    document.body.appendChild(Background);
    document.body.appendChild(square);
    document.body.appendChild(Logo);
    document.body.appendChild(Cat);
    document.body.appendChild(Home);
    document.body.appendChild(About);
    document.body.appendChild(Programs);
    document.body.appendChild(dimensionDiv);
    document.body.appendChild(TitleDiv);
    document.body.appendChild(TitleDiv1);
});
