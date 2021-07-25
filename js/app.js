document.addEventListener('DOMContentLoaded', () => {
   const albumForm = document.querySelector('#album-form');
   albumForm.addEventListener('submit', handleSubmit);

   const deleteButton = document.querySelector('#delete');
   deleteButton.addEventListener('click', handleDeleteAll);
});

const handleSubmit = event => {
    event.preventDefault();
    const albumItem = createAlbumItem(event.target);
    const albumList = document.querySelector('#album-list');
    albumList.appendChild(albumItem);
    event.target.reset();
};

const createAlbumItem = form => {
    const albumItem = document.createElement('li');
    albumItem.classList.add('album-item');

    const albumName = getAlbumName(form);
    albumItem.appendChild(albumName);

    const albumArtist = getAlbumArtist(form);
    albumItem.appendChild(albumArtist);

    const albumYear = getAlbumYear(form);
    albumItem.appendChild(albumYear);

    const albumRating = getAlbumRating(form);
    albumItem.appendChild(albumRating);

    return albumItem;
};

const getAlbumName = form => {
    const albumName = document.createElement('h3');
    albumName.textContent = `Album: ${form.album.value}`;
    return albumName;
};

const getAlbumArtist = form => {
    const albumArtist = document.createElement('h4');
    albumArtist.textContent = `Artist: ${form.artist.value}`;
    return albumArtist;
};

const getAlbumYear = form => {
    const albumYear = document.createElement('h5');
    albumYear.textContent = `Released: ${form.year.value}`;
    return albumYear;
};

const getAlbumRating = form => {
    const albumRating = document.createElement('h4');
    albumRating.textContent = `My rating: ${form.rating.value} out of 5`;
    return albumRating;
};

const handleDeleteAll = () => {
    const albumList = document.querySelector('#album-list');
    albumList.innerHTML = '';
};

