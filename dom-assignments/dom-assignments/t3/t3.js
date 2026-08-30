const target = document.querySelector('#target');

const browser = navigator.userAgent;

let browserName = 'Unknown';
let browserVersion = '';

if (browser.includes('Edg')) {
  browserName = 'Microsoft Edge';
} else if (browser.includes('Chrome')) {
  browserName = 'Google Chrome';
} else if (browser.includes('Firefox')) {
  browserName = 'Mozilla Firefox';
} else if (browser.includes('Safari')) {
  browserName = 'Safari';
}

if (browser.includes('Chrome')) {
  browserVersion = browser.split('Chrome/')[1].split(' ')[0];
} else if (browser.includes('Firefox')) {
  browserVersion = browser.split('Firefox/')[1];
} else if (browser.includes('Edg')) {
  browserVersion = browser.split('Edg/')[1].split(' ')[0];
} else if (browser.includes('Safari')) {
  browserVersion = browser.split('Version/')[1].split(' ')[0];
}

const screenWidth = screen.width;
const screenHeight = screen.height;

const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;

const date = new Date();

const dateText = date.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const timeText = date.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browserName}, ${browserVersion}</p>
  <p>Operating system: ${navigator.platform}</p>
  <p>Screen size: ${screenWidth} x ${screenHeight}</p>
  <p>Available screen space: ${availableWidth} x ${availableHeight}</p>
  <p>Date: ${dateText}</p>
  <p>Time: ${timeText}</p>
`;
