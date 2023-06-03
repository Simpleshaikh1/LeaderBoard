import './index.css';
import UI from './modules/UI.js';

document.addEventListener('DOMContentLoaded', UI.showScores);

document.querySelector('.leaderForm').addEventListener('submit', ((code) => UI.addScore(code)));