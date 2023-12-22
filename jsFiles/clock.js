 function updateClock() {
   const now = new Date();
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const dayOfWeek = daysOfWeek[now.getDay()];
   const month = months[now.getMonth()];
   const date = now.getDate();

   const hours = now.getHours().toString().padStart(2, '0');
   const minutes = now.getMinutes().toString().padStart(2, '0');
   const seconds = now.getSeconds().toString().padStart(2, '0');

   const timeString = `${hours}:${minutes}:${seconds}`;
   const dateString = `${dayOfWeek}, ${month} ${date}`;

   document.getElementById('time').innerHTML = `${timeString}`;
   document.getElementById('date').innerHTML = `${dateString}`;
   document.getElementById('click').innerHTML = `Tap to unlock`;
   document.getElementById('calender_time').innerHTML = `${timeString}`;
 }

 function toggleDarkTheme() {
   document.body.classList.toggle('dark-theme');
 }

 setInterval(updateClock, 1000); // Update the clock every second

 // Toggle dark theme on click
 document.addEventListener('click', toggleDarkTheme);

 // Uncomment the following line if you want to toggle dark theme on load
 // toggleDarkTheme();