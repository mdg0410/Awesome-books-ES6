import { DateTime } from './modules/luxon.js';

const todayContainer = document.getElementById('today');

todayContainer.textContent = DateTime.now().toFormat('DDD, tt');