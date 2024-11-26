// Smooth scrolling for links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Animation on scroll for feature cards
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});

//ABOUT

// Scroll reveal animations for About page sections
const revealElements = document.querySelectorAll('.text-content, .objective-list li, .call-to-action');

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('reveal');
    } else {
      el.classList.remove('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);


// JOBS
// Job card reveal animation
const jobCards = document.querySelectorAll('.job-card');

const revealJobCards = () => {
  jobCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add('reveal');
    } else {
      card.classList.remove('reveal');
    }
  });
};

window.addEventListener('scroll', revealJobCards);



// MENTORSHIP
    // Function to open profile popup with mentor details
    function openProfile(name, field, availability) {
        document.getElementById('mentorName').textContent = name;
        document.getElementById('mentorField').textContent = field;
        document.getElementById('mentorAvailability').textContent = availability;
        document.getElementById('profilePopup').style.display = 'flex';
    }

    // Function to close profile popup
    function closeProfile() {
        document.getElementById('profilePopup').style.display = 'none';
    }

    // Function to book a session
    function bookSession() {
        alert("Session booked successfully!");
        closeProfile();
    }
    
 // GRAPH 
     const ctx = document.getElementById('youthChart').getContext('2d');
    const youthChart = new Chart(ctx, {
      type: 'bar',  // Choose 'bar', 'line', 'pie', or other types
      data: {
        labels: ['Educational Skills', 'Mentorship', 'Career Guidance', 'Jobs & Internships'],
        datasets: [{
          label: 'Youth Empowerment Needs (%)',
          data: [35, 25, 20, 20],  // Sample data representing estimated needs
          backgroundColor: ['#f9d342', '#ff6b6b', '#4e73df', '#1cc88a'],
          borderColor: ['#f9a826', '#ff3b3b', '#3b61df', '#17a673'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      }
    });