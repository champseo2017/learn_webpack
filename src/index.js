import { Header } from "./app/header";
import './style.css'
import './styles/scss/main.scss'
import narutojpg from  './assets/images/naruto.jpg'
const header = new Header()
const firstHeading = header.getFirstHeading();
console.log(firstHeading);
document.getElementById('naruto-jpg').setAttribute('src', narutojpg)