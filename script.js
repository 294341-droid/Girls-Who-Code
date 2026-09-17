function showTime(){
  let time = new Date().toLocaleString();
  document.getElementById('currentTime').textContent = time;
}
showTime();
setInterval(showTime, 1000);
