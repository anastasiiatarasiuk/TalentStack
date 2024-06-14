const firstSkillsList = document.querySelector('.first-skills-list');
const secondSkillsList = document.querySelector('.second-skills-list');

const initialSkillsItems = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'React Native',
  'Typescript',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'React Native',
  'Typescript',
];

function updateSkillsItems() {
  const screenWidth = window.innerWidth;

  firstSkillsList.innerHTML = '';
  secondSkillsList.innerHTML = '';

  initialSkillsItems.forEach(skill => {
    const firstItem = document.createElement('li');
    firstItem.className = 'skills-item green-mark';
    firstItem.textContent = skill;

    const secondItem = document.createElement('li');
    secondItem.className = 'skills-item black-mark';
    secondItem.textContent = skill;

    firstSkillsList.appendChild(firstItem);
    secondSkillsList.appendChild(secondItem);
  });

  if (screenWidth > 1280) {
    initialSkillsItems.forEach(skill => {
      const firstItem = document.createElement('li');
      firstItem.className = 'skills-item green-mark';
      firstItem.textContent = skill;

      const secondItem = document.createElement('li');
      secondItem.className = 'skills-item black-mark';
      secondItem.textContent = skill;

      firstSkillsList.appendChild(firstItem);
      secondSkillsList.appendChild(secondItem);
    });
  }
}

updateSkillsItems();
window.addEventListener('resize', updateSkillsItems);
