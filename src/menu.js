import './style.css';
import Logo from './logo.svg';
import sign from './sign.svg';

export default function menuComponent() {
    /* initial content render */
    const content = document.createElement('div');
    content.id = 'content';

    /* menu page */
    const menu = document.createElement('div');
    menu.id = 'menu';

    /* navbar */
    const navbar = document.createElement('div');
    navbar.id = 'navbar';

    /* logo */
    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');
    navbar.append(logo);

    /* links */
    const links = document.createElement('div');
    links.classList.add('links');
    
    /* individual links */
    const link1 = document.createElement('a');
    link1.textContent = 'Menu';
    const link2 = document.createElement('a');
    link2.textContent = 'Order';
    const link3 = document.createElement('a');
    link3.textContent = 'About';

    links.append(link1);
    links.append(link2);
    links.append(link3);

    menu.append(navbar);
    navbar.append(links);

    content.append(menu);
    return content;
}