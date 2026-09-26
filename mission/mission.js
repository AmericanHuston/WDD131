addEventListener('change', (e) => changeMode(e));

function changeMode(dropdown){
    const body = document.body;
    const container = document.getElementById('container');
    const img = document.getElementById('logo');
    if (dropdown.target.value == 'default'){
        img.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
        body.classList.remove('dark');
        container.classList.add('dark-border');
        container.classList.remove('light-border');
    } else if (dropdown.target.value == 'light'){
        img.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
        body.classList.remove('dark');
        container.classList.add('dark-border');
        container.classList.remove('light-border');
    } else if (dropdown.target.value == 'dark'){
        img.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
        body.classList.add('dark');
        container.classList.add('light-border');
        container.classList.remove('dark-border');
    }
}