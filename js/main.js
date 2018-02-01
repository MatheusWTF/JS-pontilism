window.onload = ()=>{
  const canvas = document.querySelector('#image');
  ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  const screen = document.querySelector('#screen');
  ctx2 = screen.getContext('2d');
  screen.width = 500;
  screen.height = 500;

  img = document.getElementById('source');
  ctx.drawImage(img, 0, 0, 500, 500);
  setInterval(draw, 1);
}

function draw(){
  for(let i = 0; i < 50; i++){
    drawCircle()
  }
}

function drawCircle(){
  x = Math.floor(Math.random()*500);
  y = Math.floor(Math.random()*500);
  radius = 1;

  pixel = ctx.getImageData(x, y, 1, 1);
  data = pixel.data;
  r = data[0];
  g = data[1];
  b = data[2];
  a = data[3];

  if(r === 0 && g === 0 && b === 0){
    rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
  }else{
    rgba = `rgba(${r}, ${g}, ${b}, 0.5)`;
  }
  
  ctx2.beginPath();
  ctx2.moveTo(x, y);
  ctx2.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx2.fillStyle = rgba;
  ctx2.fill();
}