import './index.css';
import UI from './modules/UI.js';

document.addEventListener('DOMContentLoaded', UI.showScores);

document.querySelector('.submit').addEventListener('click', ((code) => UI.addScore(code)));