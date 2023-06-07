const profileForm = document.getElementById('profileForm');

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const profilePicture = document.getElementById('profilePicture').files[0];

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('profilePicture', profilePicture);

  fetch('/api/profile', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      displayProfile(data);
      clearForm();
    })
    .catch(error => {
      console.error('Failed to create profile:', error);
    });
});

function displayProfile(profile) {
  const profileList = document.getElementById('profileList');

  const li = document.createElement('li');
  li.textContent = `${profile.name} (${profile.email})`;
  profileList.appendChild(li);
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('profilePicture').value = '';
}

function fetchProfiles() {
  fetch('/api/profile')
    .then(response => response.json())
    .then(data => {
      const profileList = document.getElementById('profileList');
      profileList.innerHTML = '';

      data.forEach(profile => {
        const li = document.createElement('li');
        li.textContent = `${profile.name} (${profile.email})`;
        profileList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Failed to fetch profiles:', error);
    });
}

// Fetch profiles on page load
fetchProfiles();