window.onload=(){
function showTime() {
  let canvas = document.querySelector('#canvas');
  let context = canvas.getContext('2d');
  let clockRadius = canvas.width / 2;
  context.fillStyle = 'rgb(111, 48, 21)';

  context.beginPath();
  context.arc(clockRadius, clockRadius, clockRadius, 0, 2 * Math.PI);
  context.fill();
  context.beginPath();
  context.arc(clockRadius, clockRadius, clockRadius / 40, 0, 2 * Math.PI);
  context.fillStyle = 'rgb(181, 189, 184)';
  context.fill();
  context.font = clockRadius / 10 + 'px Sans-Serif';
  context.fillStyle = 'rgb(38, 22, 0)';
  for (let i = 1; i <= 12; i++) {
    context.fillText(i, clockRadius - clockRadius / 20 + clockRadius * 0.9 * Math.sin(i * 2 * Math.PI / 12), clockRadius - clockRadius * 0.9 * Math.cos(i * 2 * Math.PI / 12));
  }

  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let hour = hours % 12 + minutes / 60 + seconds / 3600;
  let hourAngle = hour * 2 * Math.PI / 12;
  let minuteAngle = minutes * 2 * Math.PI / 60;
  let secondAngle = seconds * 2 * Math.PI / 60;
  context.strokeStyle = 'rgb(181, 189, 184)';
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(clockRadius + clockRadius * 0.5 * Math.sin(hourAngle), clockRadius - clockRadius * 0.5 * Math.cos(hourAngle));
  context.lineWidth = 7;
  context.stroke();
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(clockRadius + clockRadius * 0.7 * Math.sin(minuteAngle), clockRadius - clockRadius * 0.7 * Math.cos(minuteAngle));
  context.lineWidth = 4;
  context.stroke();
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(clockRadius + clockRadius * 0.9 * Math.sin(secondAngle), clockRadius - clockRadius * 0.9 * Math.cos(secondAngle));
  context.lineWidth = 2;
  context.stroke();
  context.strokeStyle = 'black';
}

setInterval(showTime, 1000);
}
