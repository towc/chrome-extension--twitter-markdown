window.setInterval(() => {
  Array.from(document.querySelectorAll('.js-tweet-text')).forEach((el) => {
    if(!el.hasBeenMarked) {
      el.innerHTML = marked(el.innerHTML);
      el.hasBeenMarked = true;
    }
  })
}, 5000);
