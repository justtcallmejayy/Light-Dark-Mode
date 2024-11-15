let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const toggleDarkMode = () => {
  const isDark = document.body.classList.toggle('darkmode');
  localStorage.setItem('darkmode', isDark ? 'active' : null);
};

if (darkmode === 'active') {
  document.body.classList.add('darkmode');
}

themeSwitch.addEventListener('click', toggleDarkMode);
