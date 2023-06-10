import './styles.css';
import './empatia-logo.svg';
import './connect.svg';
import './contact-button.svg';
import './favicon-32x32.png';
import './arrow.svg';
import './whats-app-icon.svg';

document.getElementById("copyright-year").innerHTML = new Date().getFullYear().toString();

const contactToggle = document.querySelector(".contact-toggle");
const contactPanel = document.querySelector(".contact-panel");
contactToggle.addEventListener("click", () => {
  contactPanel.classList.toggle('is-open');
})
