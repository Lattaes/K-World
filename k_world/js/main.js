// START JS VIDEO PLAYER MODAL
const Play = document.querySelector('#playing'),
      Close = document.querySelector('#close'),
      Modal = document.querySelector('.modal-player');

Play.addEventListener('click',()=>{
  Modal.classList.add('show');
});

Close.addEventListener('click',()=>{
  Modal.classList.remove('show');

  var iframes = Modal.getElementsByTagName('iframe');
  if(iframes != null){
    for (let i = 0; i < iframes.length; i++){
      const iframe = iframes[i];
      iframe.src = iframe.src;
    }
  }
});
// END JS VIDEO PLAYER MODAL

const widget = document.querySelector(".star-widget");