//For contentcreation.html

// Hover animation for the button
const button = document.querySelector('.animate-button');

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
});

//For categories.html

// Select all links within the category-container
const categoryLinks = document.querySelectorAll('.category-container a');

// Add hover and mouseout event listeners to each link
categoryLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';   

    });
});

//For Inprogress Learning

// Sample data (replace with actual user data)
const overallProgress = 60;
const codingProgress = 75;
const designProgress = 40;

// Update the progress bars and percentages
document.getElementById('overallPercentage').textContent = overallProgress + '%';
document.getElementById('overallProgress').style.width = overallProgress + '%';

document.getElementById('codingPercentage').textContent = codingProgress + '%';
document.getElementById('codingProgress').style.width = codingProgress + '%';

document.getElementById('designPercentage').textContent = designPercentage + '%';
document.getElementById('designProgress').style.width = designPercentage + '%';