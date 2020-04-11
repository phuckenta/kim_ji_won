var i = 0;
var images = [];
var time = 3000;

images[0] = "Img/phim/giadinh.jpg";
images[1] = "Img/phim/ngthuake.jpg";
images[2] = "Img/phim/satnha.png";
images[3] = "Img/phim/andanh.jpg";
images[4] = "Img/phim/huaveeee.jpg";
images[5] = "Img/phim/thanhxuan.jpg";
images[6] = "Img/phim/anhduong.jpg";
images[7] = "Img/phim/biennien.webp";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}
window.onload = changeImg;
