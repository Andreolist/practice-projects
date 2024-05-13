
function MusicAlbum(name, artist, artistImage, songs, yearReleased, albumCover, albumDuration) {

  this.name = name;
  this.artist = artist;
  this.artistImage = artistImage;
  this.songs = [];
  this.yearReleased = yearReleased;
  this.albumCover = albumCover;
  this.albumDuration = albumDuration;

  this.addAlbum = function() {
    let name = document.createElement('h1');
    let artist = document.createElement('h3');
    let artistImage = document.createElement('div');
    let yearReleased = document.createElement('p');
    let albumCover = document.createElement('div');
    let albumDuration = document.createElement('p');


    name.textContent = myAlbum.name;
    artist.textContent = myAlbum.artist;
    artistImage.innerHTML = `<img src='${myAlbum.artistImage}' id='logo'>`;
    yearReleased.textContent = myAlbum.yearReleased;
    albumCover.innerHTML = `<img src='${myAlbum.artistImage}' id='cover'>`;
    albumDuration.textContent = myAlbum.albumDuration;


    let another_div = document.createElement('div');
    another_div.classList.add('another_div');
    another_div.appendChild(albumCover);
    another_div.appendChild(artist);
    another_div.appendChild(yearReleased);
    another_div.appendChild(albumDuration);


    let title_artist = document.createElement('div');
    title_artist.classList.add('title_artist');
    title_artist.appendChild(name);
    title_artist.appendChild(another_div);


    let album = document.getElementById('album');
    album.appendChild(artistImage);
    album.appendChild(title_artist);

  }


  this.addSong = function(song) {
    this.songs.push(song)
  }

  this.listSongs = function() {

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let top = document.createElement('div')
    let playlist = document.getElementById('playlist');
    let index = 0;

    top.innerHTML = `
    <div class='top1'>

      <div class = 'left'>
        <div>#</div>
        <div>Artist</div>
      </div>
      <div class = 'center'>
        <div>Title</div>
        <div>Duration</div>
      </div>
      <div class='right'>Plays</div>

    </div>
    <hr class = 'hr'>
    `

    playlist.appendChild(top);
    
    

    for(let song of this.songs) {
    
      let row = document.createElement('tr');
      
      tbody.appendChild(row);
     
      table.appendChild(tbody);
      playlist.appendChild(table);

      let number = document.createElement('td')
      let artist = document.createElement('td');
      let title = document.createElement('td');
      let duration = document.createElement('td');
      let plays = document.createElement('td');




      row.textContent = this.song;
      number.textContent = `${index += 1}`;
      artist.textContent = ` ${song.artist}`;
      title.textContent = `${song.title}`;
      duration.textContent = `${song.duration}`;
      plays.textContent = `${song.plays}`;
  

      row.appendChild(number);
      row.appendChild(artist);
      row.appendChild(title);
      row.appendChild(duration);
      row.appendChild(plays);
    }
    
    index ++;

  }
  
}

function Song(title, artist, plays, duration) {
  this.title = title;
  this.artist = artist;
  this.plays = plays;
  this.duration = duration;
}




const song1 = new Song (
  'Enter Sandman',
  'Metallica',
  '19M',
  '3:33'
)

const song2 = new Song ( 
  'One',
  'Metallica',
  '15M',
  '3:50'
)

const song3 = new Song (
  'Fade to Black',
  'Metallica',
  '15M',
  '4:00'
)

const song4 = new Song (
  'Nothing Else Matters',
  'Metallica',
  '9M',
  '2:34'
)

const song5 = new Song (
  'The Unforgiven',
  'Metallica',
  '14M',
  '3:12'
)

const song6 = new Song (
  'Seek and Destroy',
  'Metallica',
  '13M',
  '4:15'
)

const song7 = new Song(
  'Fuel',
  'Metallica',
  '16M',
  '5:00'
)

const song8 = new Song (
  'The Memory Remains',
  'Metallica',
  '20M',
  '4:23'
)

const myAlbum = new MusicAlbum(
  'Best of Metallica',
  'Metallica',
  './assets/img/Metallica_logo.jpg',
  [],
  '2024',
  './Metallica_logo.jpg',
  '8 songs / 1hr'
);

myAlbum.addAlbum();


myAlbum.addSong(song1);
myAlbum.addSong(song2);
myAlbum.addSong(song3);
myAlbum.addSong(song4);
myAlbum.addSong(song5);
myAlbum.addSong(song6);
myAlbum.addSong(song7);
myAlbum.addSong(song8);

myAlbum.listSongs();

