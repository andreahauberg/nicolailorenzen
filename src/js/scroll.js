window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector("scroll-to-top").style.display = "block";
    } else {
      document.querySelector("scroll-to-top").style.display = "none";
    }
  };
  
  document.querySelector("scroll-to-top").addEventListener("click", scrollToTop);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }