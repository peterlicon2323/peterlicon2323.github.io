// document.addEventListener('DOMContentLoaded', () => {
//   const toggleCheckbox = document.getElementById('theme-toggle');
//   const html = document.documentElement;

//   // Initialize theme
//   const initializeTheme = () => {
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//       html.classList.add('dark');
//       toggleCheckbox.checked = true;
//     } else {
//       html.classList.remove('dark');
//       toggleCheckbox.checked = false;
//     }
//   };

//   // Run initialization
//   initializeTheme();

//   // Toggle theme on change
//   toggleCheckbox.addEventListener('change', () => {
//     const isDark = html.classList.toggle('dark');
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   });

//   // Listen for system theme changes
//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
//     if (!localStorage.getItem('theme')) {
//       html.classList.toggle('dark', e.matches);
//       toggleCheckbox.checked = e.matches;
//     }
//   });
// });


const storageKey = 'theme-preference'

const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'

  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()

  // now this script can find and listen for clicks on the control
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onClick)
}

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })