// Lazy load images using IntersectionObserver
// This waits for the DOM content to be fully loaded before running the code inside
document.addEventListener("DOMContentLoaded", function() {
    
    // Select all images within the gallery using a CSS selector
    const lazyImages = document.querySelectorAll(".gallery img");
    
    // Create a new IntersectionObserver instance
    // The callback function will be executed when the observed elements intersect with the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        
        // Loop through each entry (observed element)
        entries.forEach(entry => {
            
            // Check if the entry is currently intersecting (visible in the viewport)
            if (entry.isIntersecting) {
                
                // Get the current target image from the entry
                const img = entry.target;
                
                // Set the src attribute of the image to its data-src attribute for lazy loading
                img.src = img.dataset.src;
                
                // Stop observing this image since it has been loaded
                observer.unobserve(img); // Stop observing once the image is loaded
            }
        });
    });

    // For each lazy image, observe it with the IntersectionObserver
    lazyImages.forEach(image => {
        observer.observe(image);
    });
});

// Get modal elements
// Select the modal element using its ID
const modal = document.getElementById("imageModal");
// Select the image inside the modal where the clicked image will be displayed
const modalImg = document.getElementById("modalImg");
// Select the close button of the modal (the first one if there are multiple)
const closeBtn = document.getElementsByClassName("close")[0];

// When an image is clicked, open the modal and show the image
// Select all images in the gallery and add a click event listener to each
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener('click', function() {
        
        // Check if the image source (src) is valid and has loaded
        if (this.src) { // Ensure the image has loaded
            
            // Display the modal
            modal.style.display = "block";
            // Set the modal image source to the clicked image's source
            modalImg.src = this.src;
        }
    });
});

// Close the modal when the user clicks on the close button
closeBtn.onclick = function() {
    // Set the modal display style to none, effectively hiding it
    modal.style.display = "none";
};

// Also close the modal if the user clicks anywhere outside the image
window.onclick = function(event) {
    // Check if the click happened on the modal itself
    if (event.target == modal) {
        // Hide the modal if clicked outside the image
        modal.style.display = "none";
    }
}; // <-- Closing bracket added here

// Smooth scroll for internal links
// Select all anchor links that start with '#' (internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each anchor
    anchor.addEventListener('click', function(event) {
        // Prevent the default action of the anchor link (jumping to the section)
        event.preventDefault();
        // Scroll smoothly to the target section specified in the href attribute
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show 'Back to Top' button when scrolling
// Select the 'Back to Top' button using its ID
const backToTopBtn = document.getElementById("backToTop");

// Add a scroll event listener to the window
window.onscroll = function() {
    // Check if the scroll position is greater than 200 pixels from the top
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // If so, display the 'Back to Top' button
        backToTopBtn.style.display = "block";
    } else {
        // Otherwise, hide the button
        backToTopBtn.style.display = "none";
    }
};

// Scroll to top when the button is clicked
// Add a click event listener to the 'Back to Top' button
backToTopBtn.addEventListener("click", function() {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
