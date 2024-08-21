// START VIDEO PLAYER MODAL
const Play = document.querySelector('#playing'),
      Close = document.querySelector('#close'),
      Modal = document.querySelector('.modal-player');

// element.addEventListerner(event, function, useCapture)
Play.addEventListener('click',()=>{
  Modal.classList.add('show');
});

Close.addEventListener('click',()=>{
  Modal.classList.remove('show');

  // Make the video not playing in the bag (stooping video) when the user close the modal (video player)
  var iframes = Modal.getElementsByTagName('iframe');
  if(iframes != null){
    for (let i = 0; i < iframes.length; i++){
      const iframe = iframes[i];
      iframe.src = iframe.src;
    }
  }
});
// END JS VIDEO PLAYER MODAL

// const widget = document.querySelector(".star-widget");