// 1. Which element will dispatch the event
// 2. which event should we listen for
// 3. what code should i run when the event happens

document.addEventListener('DOMContentLoaded', () => {
   const albumForm = document.querySelector('#album-form');
   albumForm.addEventListener('submit', handleSubmit);
});

const handleSubmit = event => {
    event.preventDefault();
    const albumItem = createAlbumItem(event.target);
    const albumList = document.querySelector('#album-list');
    albumList.appendChild(albumItem);
};

const createAlbumItem = form => {
    const albumItem = document.createElement('li');
    albumItem.classList.add('album-item');

    const albumName = document.createElement('h3');
    albumName.textContent = form.album.value;
    albumItem.appendChild(albumName);

    const albumArtist = document.createElement('h4');
    albumArtist.textContent = form.artist.value;
    albumItem.appendChild(albumArtist);

    const albumYear = document.createElement('h5');
    albumYear.textContent = form.year.value;
    albumItem.appendChild(albumYear);

    const albumRating = document.createElement('h4');
    albumRating.textContent = form.rating.value;
    albumItem.appendChild(albumRating);

    return albumItem;
};