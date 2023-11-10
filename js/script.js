const toggleSwitch = document.querySelector(".toggleSwitch");

toggleSwitch.addEventListener("click", function () {
    const root = document.documentElement;

    if (this.checked) {
		root.style.setProperty('--background-color', 'var(--clr-dark-bg)');
		root.style.setProperty('--text-color', 'var(--clr-light-text)');
		root.style.setProperty('--title-color', 'var(--clr-lighter-text)');
		root.style.setProperty('--subtitle-color', 'var(--clr-lighter-text)');
		root.style.setProperty('--card-bg', 'var(--clr-dark-card-bg)');
    } else {
		root.style.setProperty('--background-color', 'var(--clr-light-bg)');
		root.style.setProperty('--text-color', 'var(--clr-dark-text)');
		root.style.setProperty('--title-color', 'var(--clr-darker-text)');
		root.style.setProperty('--subtitle-color', 'var(--clr-dark-text)');
		root.style.setProperty('--card-bg', 'var(--clr-light-card-bg)');
    }
});
