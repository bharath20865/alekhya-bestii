/* Change only this one variable before sharing. */
const SEND_PIC_URL = "https://wa.me/?text=Alekhya%20sending%20Bharath%20the%20pic%20📸%20💗";

document.getElementById('sendPic').href = SEND_PIC_URL;

document.getElementById('yesBtn').addEventListener('click', () => {
  const final = document.getElementById('final');
  final.classList.add('celebrate');
  const box = document.getElementById('hearts');
  const chars = ['💗','🎀','✨','🌸','⭐','🫶🏻'];
  for(let i=0;i<42;i++){
    const el=document.createElement('span');
    el.className='heart';
    el.textContent=chars[i%chars.length];
    el.style.setProperty('--dx', `${(Math.random()-.5)*760}px`);
    el.style.setProperty('--dy', `${(Math.random()-.5)*520}px`);
    el.style.left=`${48+Math.random()*4}%`;
    el.style.top=`${46+Math.random()*8}%`;
    el.style.animationDelay=`${Math.random()*.18}s`;
    box.appendChild(el);
  }
  setTimeout(()=>{
    const after=document.getElementById('after');
    after.hidden=false;
    after.scrollIntoView({behavior:'smooth',block:'start'});
    box.innerHTML='';
  },850);
});

/* Gentle, opt-in ambient tone. */
let audioCtx=null, gainNode=null, osc=null, playing=false;
const musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',()=>{
  if(playing){
    osc?.stop(); audioCtx?.close(); audioCtx=null; osc=null; playing=false; musicBtn.textContent='♫'; return;
  }
  audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  gainNode=audioCtx.createGain(); gainNode.gain.value=.015; gainNode.connect(audioCtx.destination);
  osc=audioCtx.createOscillator(); osc.type='sine'; osc.frequency.value=261.63; osc.connect(gainNode); osc.start(); playing=true; musicBtn.textContent='◼';
});
