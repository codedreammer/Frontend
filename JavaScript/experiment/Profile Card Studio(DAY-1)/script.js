const nameInput = document.getElementById('name-input');
const roleInput = document.getElementById('role-input');
const bioInput = document.getElementById('bio-input');
const skillInput = document.getElementById('skill-input');
const addSkillBtn = document.getElementById('add-skill');
const removeSkillBtn = document.getElementById('remove-skill');
const toggleDetailsBtn = document.getElementById('toggle-details');
const themes = document.querySelectorAll('.theme');
const imgInput = document.getElementById('img-url');


const nameEl = document.getElementById('name');
const roleEl = document.getElementById('role');
const bioEl = document.getElementById('bio');
const skillsEl = document.getElementById('skills');
const detailsEl = document.getElementById('details');
const card = document.querySelector('.profile-card');
const imgEl = document.getElementById('profile-img');



nameInput.addEventListener('input', () => nameEl.textContent = nameInput.value);
roleInput.addEventListener('input', () => roleEl.textContent = roleInput.value);
bioInput.addEventListener('input', () => bioEl.innerText = bioInput.value);


// Change image
imgInput.addEventListener('input', () => {
if (imgInput.value.trim() === '') {
imgEl.removeAttribute('src');
} else {
imgEl.setAttribute('src', imgInput.value);
}
});


// Theme change
themes.forEach(btn => {
btn.addEventListener('click', () => {
card.style.backgroundColor = btn.dataset.color;
themes.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
});
});


// Add skill
addSkillBtn.addEventListener('click', () => {
const skill = skillInput.value.trim();
if (!skill) return;
const chip = document.createElement('div');
chip.className = 'skill';
chip.innerHTML = `${skill} <span>x</span>`;
skillsEl.appendChild(chip);
skillInput.value = '';
});


// Remove skill
skillsEl.addEventListener('click', (e) => {
if (e.target.tagName === 'SPAN') {
e.target.parentElement.remove();
}
});


removeSkillBtn.addEventListener('click', () => {
if (skillsEl.lastElementChild) {
skillsEl.lastElementChild.remove();
}
});


// Toggle details
toggleDetailsBtn.addEventListener('click', () => {
detailsEl.classList.toggle('hidden');
});