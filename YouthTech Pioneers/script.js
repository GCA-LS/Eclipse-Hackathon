export default function Component() {
    return (
      <script>{`
        // Sample data (in a real application, this would come from a backend)
        const programs = [
          { title: 'Computer Science', institution: 'National University of Lesotho', duration: '4 years' },
          { title: 'Business Administration', institution: 'Limkokwing University', duration: '3 years' },
          { title: 'Environmental Science', institution: 'Lerotholi Polytechnic', duration: '3 years' },
        ];
  
        const institutions = [
          { name: 'National University of Lesotho', location: 'Roma', programs: 50 },
          { name: 'Limkokwing University', location: 'Maseru', programs: 30 },
          { name: 'Lerotholi Polytechnic', location: 'Maseru', programs: 20 },
        ];
  
        const opportunities = [
          { title: 'Software Developer Internship', company: 'Tech Innovators', location: 'Maseru' },
          { title: 'Marketing Assistant', company: 'Global Brands', location: 'Leribe' },
          { title: 'Environmental Researcher', company: 'EcoSolutions', location: 'Mohale\'s Hoek' },
        ];
  
        // Function to create and append program cards
        function createProgramCards() {
          const programList = document.querySelector('.program-list');
          programs.forEach(program => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = \`
              <h3>\${program.title}</h3>
              <p>\${program.institution}</p>
              <p>Duration: \${program.duration}</p>
            \`;
            programList.appendChild(card);
          });
        }
  
        // Function to create and append institution cards
        function createInstitutionCards() {
          const institutionList = document.querySelector('.institution-list');
          institutions.forEach(institution => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = \`
              <h3>\${institution.name}</h3>
              <p>Location: \${institution.location}</p>
              <p>Programs: \${institution.programs}</p>
            \`;
            institutionList.appendChild(card);
          });
        }
  
        // Function to create and append opportunity cards
        function createOpportunityCards() {
          const opportunityList = document.querySelector('.opportunity-list');
          opportunities.forEach(opportunity => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = \`
              <h3>\${opportunity.title}</h3>
              <p>\${opportunity.company}</p>
              <p>Location: \${opportunity.location}</p>
            \`;
            opportunityList.appendChild(card);
          });
        }
  
        // Function to handle login modal
        function setupLoginModal() {
          const loginBtn = document.querySelector('.login-btn');
          const modal = document.getElementById('login-modal');
          const loginForm = document.getElementById('login-form');
  
          loginBtn.addEventListener('click', () => {
            modal.style.display = 'block';
          });
  
          window.addEventListener('click', (event) => {
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          });
  
          loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Here you would typically send the login data to a server
            console.log('Login submitted');
            modal.style.display = 'none';
          });
        }
  
        // Initialize the page
        function init() {
          createProgramCards();
          createInstitutionCards();
          createOpportunityCards();
          setupLoginModal();
        }
  
        // Run initialization when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', init);
      `}</script>
    )
  }