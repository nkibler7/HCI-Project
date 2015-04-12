function mod(n, m) {
  return ((n % m) + m) % m;
}

var songIndex = 0;
var songs = [
  {
    title: 'I Kissed a Girl',
    artist: 'Katy Perry'
  },
  {
    title: 'Fireworks',
    artist: 'Katy Perry'
  },
  {
    title: 'Dark Horse',
    artist: 'Katy Perry'
  }
];

$(function() {
  /*
   * DOM Lookups
   */
  var sliders = $('.slider');
  var temp = $('#temp');
  var tempDown = $('#tempDown');
  var tempUp = $('#tempUp');

  var songStatus = $('#songStatus');
  var songPrev = $('#songPrev');
  var songPause = $('#songPause');
  var songPlay = $('#songPlay');
  var songNext = $('#songNext');
  var songTitle = $('#songTitle');
  var songArtist = $('#songArtist');

  sliders.slider();

  $('a.navbar-brand').click(function(e) {
    e.preventDefault();
    location.href = 'index.html';
  });

  $('a.settings-link').click(function(e) {
    e.preventDefault();
    location.href = 'settings.html';
  });

  tempDown.click(function() {
    var val = parseInt(temp.text()) - 1;
    temp.text(val);
  });

  tempUp.click(function() {
    var val = parseInt(temp.text()) + 1;
    temp.text(val);
  });

  songPause.click(function() {
    songStatus.text('Paused:');
    songPause.hide();
    songPlay.show();
  });

  songPlay.click(function() {
    songStatus.text('Playing:');
    songPlay.hide();
    songPause.show();
  });

  songPrev.click(function() {
    songIndex = mod((songIndex - 1), songs.length);
    songTitle.text(songs[songIndex].title);
    songArtist.text(songs[songIndex].artist);
  });

  songNext.click(function() {
    songIndex = mod((songIndex + 1), songs.length);
    songTitle.text(songs[songIndex].title);
    songArtist.text(songs[songIndex].artist);
  });
});