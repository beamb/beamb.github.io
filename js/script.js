function closeMenu() {
  console.log("closing the menu");
  document.getElementById("Menu").style.display = "none";
}

function openMenu() {
  console.log("opening the menu");
  document.getElementById("Menu").style.display = "block";
}

var vidIndex = -1;

function playNext() {
  vidIndex += 1;
  changevideo(vidIndex % 10);
}

function changevideo(number) {
  const ids = [
    "img/A-Novembre.mp4",
    "img/Blind-Audition.mp4",
    "img/Non-Ti-Scordar-Mai-Di-Me.mp4",
    "img/Summertime.mp4",
    "img/7-Seconds.mp4",
    "img/Why-dont-you-do-right.mp4",
    "img/Crave-You.mp4",
    "img/Easy-Lover.mp4",
    "img/Why-dont-you-do-right-audio.mp4",
    "img/Cry-Me-A-River.mp4",
  ];
  vidIndex = number;
  const vidid = ids[number];
  document.getElementById("video-bg").src = vidid;
}

function show() {
  var x = document.getElementById("SongSelector");
  var y = document.getElementById("Footer");
  x.className += "toggled";
  y.className += "toggled";
}

function hide() {
  var x = document.getElementById("SongSelector");
  var y = document.getElementById("Footer");
  x.className = "songselector";
  y.className = "footer-overlay";
}

function toggleMute() {
  var video = document.getElementById("video-bg");
  var btn = document.getElementById("MuteBtn");
  if (video.muted) {
    video.muted = false;
    btn.innerHTML = '<i class="fas fa-volume-up fa-3x"></i>';
  } else {
    video.muted = true;
    btn.innerHTML = '<i class="fas fa-volume-mute fa-3x"></i>';
  }
}

function openOverlay() {
  document.getElementById("myPress").style.display = "block";
}

function closeOverlay() {
  document.getElementById("myPress").style.display = "none";
}

function setSlide(slide) {
  var x = document.getElementById("OverlayContent");
  if (x.className === "overlay-contenttoggled") {
    x.className = "overlay-content";
  }
  document.getElementById("slide").src = slide;
  openOverlay();
}

var slides = [];
var slideIndex = 1;

function setSlides(param) {
  var x = document.getElementById("OverlayContent");
  x.className += "toggled";
  var i;
  console.log(slides);
  for (i = 0; i < param.length; i++) {
    slides.push(param[i]);
  }
  console.log(slides);
  showSlides(slideIndex);
  openOverlay();
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  document.getElementById("slide").src = slides[slideIndex - 1];
}
