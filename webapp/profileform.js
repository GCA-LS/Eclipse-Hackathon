const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bio = document.getElementById('bio').value;

    // Update the profile information (you'll need to replace this with your actual update logic)
    // For example, you might send an AJAX request to a server-side script to update a database.

    // For a simple demo, you can update the displayed information:
    document.querySelector('.profile-info h2').textContent = name;
    document.querySelector('.profile-info p:nth-child(2)').textContent = profession;
    document.querySelector('.profile-info p:nth-child(3)').textContent = email;
    document.querySelector('.profile-info p:nth-child(4)').textContent = phone;
    document.querySelector('.profile-info p:nth-child(5)').textContent = bio;
});