const error = document.querySelector(".error-500");
let i = 0, data = "", text = error.getAttribute("data-text");

let typing = setInterval(() => {
  if(i == text.length){
    clearInterval(typing);
  }else{
    data += text[i];
    document.querySelector(".error-500").setAttribute("data-text", data);
    i++;
  }
}, 100);

/* This is NOT code I wrote. It was borrowed from a  (from what I gathered) free to borrow site, https://codepen.io/edwinchen26/pen/GXxzwo
Original Owner of this code is Edwin Chen, his other works can be found here: https://codepen.io/edwinchen2 */