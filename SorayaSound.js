function twoFunctions() {
    changeImage();
    togglePlayPause();
  }
function changeImage() {
    var image = document.getElementById('buttonImage');
    if (image.src.match('https://cdn-icons-png.flaticon.com/128/565/565295.png')) {
      image.src = 'https://cdn-icons-png.flaticon.com/128/727/727269.png';
      image.alt = 'New Image';
    } else {
      image.src = 'https://cdn-icons-png.flaticon.com/128/565/565295.png';
      image.alt = 'Initial Image';
    }
  }
var audio = new Audio('audio/Dept - Tulip (Feat. Kelsey Kuan & Ashley Alisha).mp3');
var playPauseButton = document.getElementById('play-button');
var playPauseImage = document.getElementById('buttonImage');

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseImage.src = 'https://cdn-icons-png.flaticon.com/128/727/727269.png'; // Replace it with the path to your play image
    playPauseImage.alt = 'Pause Image';
} else {
    audio.pause();
    playPauseImage.src = 'https://cdn-icons-png.flaticon.com/128/565/565295.png'; // Replace it with the path to your pause image
    playPauseImage.alt = 'Play Image';
  }
}